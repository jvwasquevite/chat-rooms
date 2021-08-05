import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repositories/UserRepository'

interface IUserRequest {
  id: string
  email: string
  username: string
}

class UpdateUserUseCase {
  async execute({ id, email, username }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository)

    const userExists = await userRepository.findOne({ id })

    if (!userExists) {
      throw new Error('User does not exist')
    }

    await userRepository.update(id, { email, username })

    const user = await userRepository.findOne({ id })

    return classToPlain(user)
  }
}

export { UpdateUserUseCase }
