import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repositories/UserRepository'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne({ email })

    if (!user) {
      throw new Error('Email/Password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect')
    }

    const token = sign(
      {
        email: user.email,
      },
      '4f93ac9d10cb751b8c9c646bc9dbccb9',
      {
        subject: user.id,
        expiresIn: '1d',
      }
    )

    return token
  }
}

export { AuthenticateUserUseCase }
