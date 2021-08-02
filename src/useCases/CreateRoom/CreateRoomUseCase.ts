import { getCustomRepository } from 'typeorm'
import { ConversationRepository } from '../../repositories/ConversationRepository'
import { RoomRepository } from '../../repositories/RoomRepository'

interface IRoomRequest {
  admin_id: string
  name: string
  description: string
}

class CreateRoomUseCase {
  async execute({ admin_id, name, description }: IRoomRequest) {
    const roomRepository = getCustomRepository(RoomRepository)
    const conversationRepository = getCustomRepository(ConversationRepository)

    if (!name) {
      throw new Error('Name field is required')
    }

    const userAlreadyHasRoom = await roomRepository.findOne({ admin_id })

    if (userAlreadyHasRoom) {
      throw new Error('User already has one public room')
    }

    /**
     * Creates a new room entity
     * and saves it on database
     */

    const room = roomRepository.create({ admin_id, name, description })

    await roomRepository.save(room)

    /**
     * Creates a new conversation entity,
     * joins admin user and created room into it
     * and saves it on database
     */

    const conversation = conversationRepository.create({
      user_id: admin_id,
      room_id: room.id,
    })

    await conversationRepository.save(conversation)

    return room
  }
}

export { CreateRoomUseCase }
