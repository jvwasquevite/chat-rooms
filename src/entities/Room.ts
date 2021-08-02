import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

import { Exclude } from 'class-transformer'
import { Conversation } from './Conversation'

@Entity('room')
class Room {
  @PrimaryColumn()
  readonly id: string

  @Exclude()
  @Column()
  admin_id: string

  @JoinColumn({ name: 'admin_id' })
  @OneToOne(() => User)
  admin: User

  @Column()
  name: string

  @Column()
  description: string

  @OneToMany(() => Conversation, conversation => conversation.rooms)
  users: Conversation[]

  @Exclude()
  @CreateDateColumn()
  created_at: Date

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Room }
