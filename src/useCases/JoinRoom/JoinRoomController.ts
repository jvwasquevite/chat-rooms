import { Request, Response } from 'express'
import { JoinRoomUseCase } from './JoinRoomUseCase'

class JoinRoomController {
  async handle(req: Request, res: Response) {
    const { user_id } = req
    const { id } = req.body

    const joinRoomUseCase = new JoinRoomUseCase()

    await joinRoomUseCase.execute({ user_id, room_id: id })

    return res.status(200).json({
      message: 'Successfully joined room',
    })
  }
}

export { JoinRoomController }
