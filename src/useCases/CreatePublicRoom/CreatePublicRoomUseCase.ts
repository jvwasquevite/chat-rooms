import { getCustomRepository } from 'typeorm'
import { RoomRepository } from '../../repositories/RoomRepository'

interface IRoomRequest {
  admin_id: string
  name: string
  description: string
}

class CreatePublicRoomUseCase {
  async execute({ admin_id, name, description }: IRoomRequest) {
    const roomRepository = getCustomRepository(RoomRepository)

    if (!name) {
      throw new Error('Name field is required')
    }

    const userAlreadyHasPublicRoom = await roomRepository.findOne({ admin_id })

    if (userAlreadyHasPublicRoom) {
      throw new Error('User already has one public room')
    }

    const room = roomRepository.create({ admin_id, name, description })

    await roomRepository.save(room)

    return room
  }
}

export { CreatePublicRoomUseCase }
