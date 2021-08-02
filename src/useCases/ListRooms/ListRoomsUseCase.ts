import { getCustomRepository } from 'typeorm'
import { RoomRepository } from '../../repositories/RoomRepository'
import { classToPlain } from 'class-transformer'

class ListRoomsUseCase {
  async execute() {
    const roomRepository = getCustomRepository(RoomRepository)

    const rooms = await roomRepository.find({
      relations: ['admin', 'users'],
    })

    return classToPlain(rooms)
  }
}

export { ListRoomsUseCase }
