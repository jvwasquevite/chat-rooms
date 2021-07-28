import { Request, Response } from 'express'
import { DeleteRoomUseCase } from './DeleteRoomUseCase'

class DeleteRoomController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const deleteRoomUseCase = new DeleteRoomUseCase()

    await deleteRoomUseCase.execute(id)

    return res.status(200).json({
      message: 'Successfully deleted',
    })
  }
}

export { DeleteRoomController }
