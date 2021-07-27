import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
import { authenticateUserController } from './useCases/AuthenticateUser'
import { createPublicRoomController } from './useCases/CreatePublicRoom'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.post('/rooms', ensureAuthenticated, createPublicRoomController.handle)

export { router }
