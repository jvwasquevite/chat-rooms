import { Request, Response } from 'express'
import { ListRoomUsersUseCase } from './ListRoomUsersUseCase'

class ListRoomUsersController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const listRoomUsersUseCase = new ListRoomUsersUseCase()

    const users = await listRoomUsersUseCase.execute(id)

    return res.json(users)
  }
}

export { ListRoomUsersController }
