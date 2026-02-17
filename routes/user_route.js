import { Router } from 'express'
import { email,registerUserController } from '../controllers/user_controller.js'

export const routeUser = Router()

routeUser.post('/email', email)
routeUser.post('/register', registerUserController)