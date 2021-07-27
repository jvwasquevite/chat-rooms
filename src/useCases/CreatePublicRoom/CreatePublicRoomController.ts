import { Request, Response } from 'express'
import { CreatePublicRoomUseCase } from './CreatePublicRoomUseCase'

class CreatePublicRoomController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body
    const { user_id } = req

    const createPublicRoomUseCase = new CreatePublicRoomUseCase()
    const room = await createPublicRoomUseCase.execute({
      admin_id: user_id,
      name,
      description,
    })

    return res.json(room)
  }
}

export { CreatePublicRoomController }
