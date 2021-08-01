import { getCustomRepository } from 'typeorm'
import { RoomRepository } from '../../repositories/RoomRepository'

interface IRoomRequest {
  user_id: string
  room_id: string
}

class JoinRoomUseCase {
  async execute({ user_id, room_id }: IRoomRequest) {
    const roomRepository = getCustomRepository(RoomRepository)

    const room = await roomRepository.findOne({ id: room_id })

    if (!room) {
      throw new Error('Room does not exist!')
    }
  }
}

export { JoinRoomUseCase }
