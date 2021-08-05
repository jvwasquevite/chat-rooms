import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { email, username } = req.body

    const updateUserUseCase = new UpdateUserUseCase()
    const user = await updateUserUseCase.execute({ id, email, username })

    return res.json(user)
  }
}

export { UpdateUserController }
