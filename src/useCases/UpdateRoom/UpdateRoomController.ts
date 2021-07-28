import { Request, Response } from 'express'
import { UpdateRoomUseCase } from './UpdateRoomUseCase'

class UpdateRoomController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { name, description } = req.body
    const { user_id } = req

    const updateRoomUseCase = new UpdateRoomUseCase()
    const room = await updateRoomUseCase.execute({
      id,
      admin_id: user_id,
      name,
      description,
    })

    return res.json(room)
  }
}

export { UpdateRoomController }
