import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

import { Exclude } from 'class-transformer'

@Entity('user')
class User {
  @PrimaryColumn()
  readonly id: string

  @Column()
  email: string

  @Column()
  username: string

  @Exclude()
  @Column()
  password: string

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

export { User }
