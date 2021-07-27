import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repositories/UserRepository'
import { hash } from 'bcryptjs'

interface IUserRequest {
  email: string
  username: string
  password: string
}

class CreateUserUseCase {
  async execute({ email, username, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository)

    if (!email || !username || !password) {
      throw new Error('All fields are required')
    }

    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      email,
      username,
      password: passwordHash,
    })

    await userRepository.save(user)

    return user
  }
}

export { CreateUserUseCase }
