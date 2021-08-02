import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm'
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
  @OneToMany(() => User, User => Conversation)
  userId: User

  @Column()
  room_id: string

  @JoinColumn({ name: 'room_id' })
  @OneToOne(() => Room)
  roomId: Room

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Conversation }
