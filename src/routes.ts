import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
import { authenticateUserController } from './useCases/AuthenticateUser'
import { createRoomController } from './useCases/CreateRoom'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { listRoomsController } from './useCases/ListRooms'

const router = Router()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.post('/rooms', ensureAuthenticated, createRoomController.handle)
router.get('/rooms', listRoomsController.handle)

export { router }
