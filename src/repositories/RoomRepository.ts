import { EntityRepository, Repository } from 'typeorm'
import { Room } from '../entities/Room'

@EntityRepository(Room)
class RoomRepository extends Repository<Room> {}

export { RoomRepository }
