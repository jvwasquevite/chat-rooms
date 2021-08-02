import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Room } from './Room'
import { User } from './User'

@Entity('conversation')
class Conversation {
  @PrimaryColumn()
  readonly id: string

  @Column()
  user_id: string

  @ManyToOne(() => User, user => user.conversations)
  users: User[]

  @Column()
  room_id: string

  @ManyToOne(() => Room, room => room.conversations)
  rooms: Room[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Conversation }
