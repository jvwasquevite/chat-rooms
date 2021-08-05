import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
import { authenticateUserController } from './useCases/AuthenticateUser'
import { createRoomController } from './useCases/CreateRoom'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { listRoomsController } from './useCases/ListRooms'
import { updateRoomController } from './useCases/UpdateRoom'
import { deleteRoomController } from './useCases/DeleteRoom'
import { joinRoomController } from './useCases/JoinRoom'
import { listRoomUsersController } from './useCases/ListRoomUsers'
import { listUsersController } from './useCases/ListUsers'
import { updateUserController } from './useCases/UpdateUser'

const router = Router()

router.post('/users', createUserController.handle)
router.get('/users', listUsersController.handle)
router.put('/users/:id', updateUserController.handle)

router.post('/rooms', createRoomController.handle)
router.get('/rooms', listRoomsController.handle)
router.put('/rooms/:id', updateRoomController.handle)
router.delete('/rooms/:id', deleteRoomController.handle)

router.post('/rooms/join', joinRoomController.handle)
router.get('/rooms/users/:id', listRoomUsersController.handle)

router.post('/login', authenticateUserController.handle)

export { router }
