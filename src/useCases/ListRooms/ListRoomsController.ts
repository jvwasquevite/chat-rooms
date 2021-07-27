import { Request, Response } from 'express'
import { ListRoomsUseCase } from './ListRoomsUseCase'

class ListRoomsController {
  async handle(req: Request, res: Response) {
    const listRoomsUseCase = new ListRoomsUseCase()

    const rooms = await listRoomsUseCase.execute()

    return res.json(rooms)
  }
}

export { ListRoomsController }
