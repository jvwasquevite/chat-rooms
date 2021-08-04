import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repositories/UserRepository'

class ListUsersUseCase {
  async execute() {
    const userRepositories = getCustomRepository(UserRepository)

    const users = userRepositories.find()

    return classToPlain(users)
  }
}

export { ListUsersUseCase }
