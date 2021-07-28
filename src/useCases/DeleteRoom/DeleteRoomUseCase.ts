import { getCustomRepository } from 'typeorm'
import { RoomRepository } from '../../repositories/RoomRepository'

class DeleteRoomUseCase {
  async execute(id: string) {
    const roomRepository = getCustomRepository(RoomRepository)

    const roomExists = await roomRepository.findOne({ id })

    if (!roomExists) {
      throw new Error('Room does not exist!')
    }

    await roomRepository.delete(id)
  }
}

export { DeleteRoomUseCase }
