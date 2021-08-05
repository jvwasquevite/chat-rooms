import { getCustomRepository, getManager } from 'typeorm'
import { RoomRepository } from '../../repositories/RoomRepository'

class ListRoomUsersUseCase {
  async execute(room_id: string) {
    const roomRepository = getCustomRepository(RoomRepository)

    const roomExists = await roomRepository.findOne({ id: room_id })

    if (!roomExists) {
      throw new Error('Room not found')
    }

    const users = await getManager().query(
      `SELECT client.id, client.email, client.username
      FROM conversation
      JOIN client
      ON client.id = conversation.user_id
      WHERE conversation.room_id = $1`,
      [room_id]
    )

    return users
  }
}

export { ListRoomUsersUseCase }
