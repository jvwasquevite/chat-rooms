import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Room } from './Room'
import { User } from './User'

@Entity('conversation')
class Conversation {
  @PrimaryColumn()
  readonly id: string

  @Column()
  user_id: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User, user => user.users)
  users: User

  @Column()
  room_id: string

  @JoinColumn({ name: 'room_id' })
  @ManyToOne(() => Room, room => room.rooms)
  rooms: Room

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Conversation }
