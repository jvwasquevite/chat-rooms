import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
import { authenticateUserController } from './useCases/AuthenticateUser'

const router = Router()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

export { router }
