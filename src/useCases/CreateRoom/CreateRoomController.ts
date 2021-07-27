import { Request, Response } from 'express'
import { CreateRoomUseCase } from './CreateRoomUseCase'

class CreateRoomController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body
    const { user_id } = req

    const createRoomUseCase = new CreateRoomUseCase()
    const room = await createRoomUseCase.execute({
      admin_id: user_id,
      name,
      description,
    })

    return res.json(room)
  }
}

export { CreateRoomController }
