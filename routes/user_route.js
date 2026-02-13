import { Router } from 'express'
import { email } from '../controllers/user_controller.js'

export const routeUser = Router()

routeUser.get('/email', email)