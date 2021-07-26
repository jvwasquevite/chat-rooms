import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('room')
class Room {
  @PrimaryColumn()
  readonly id: string

  @Column()
  admin_id: string

  @JoinColumn({ name: 'admin_id' })
  @OneToOne(() => User)
  adminId: User

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Room }
