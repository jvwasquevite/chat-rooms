import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, username, password } = req.body

    const createUserUseCase = new CreateUserUseCase()
    const user = await createUserUseCase.execute({ email, username, password })

    return res.json(user)
  }
}

export { CreateUserController }
