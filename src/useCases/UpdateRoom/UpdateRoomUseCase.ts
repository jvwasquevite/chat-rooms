import { getCustomRepository } from 'typeorm'
import { RoomRepository } from '../../repositories/RoomRepository'
import { classToPlain } from 'class-transformer'

interface IRoomRequest {
  id: string
  admin_id: string
  name: string
  description: string
}

class UpdateRoomUseCase {
  async execute({ id, admin_id, name, description }: IRoomRequest) {
    const roomRepository = getCustomRepository(RoomRepository)

    const roomExists = await roomRepository.findOne({ id })

    if (!roomExists) {
      throw new Error('Room does not exist!')
    }

    const userIsAllowed = await roomRepository.findOne({ id, admin_id })

    if (!userIsAllowed) {
      throw new Error('You are not allowed to update this room')
    }

    await roomRepository.update(id, { name, description })

    const room = await roomRepository.findOne({ id })

    return classToPlain(room)
  }
}

export { UpdateRoomUseCase }
