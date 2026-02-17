import { Router } from 'express'
import { email, registerUserController } from '../controllers/user_controller.js'

export const routeUser = Router()

routeUser.route('/email')
    .post(email)
    .all((req, res) => {
        return res.status(405).json({
            error: 'Method Not Allowed'
        });
    });

routeUser.route('/register')
    .post(registerUserController)
    .all((req, res) => {
        return res.status(405).json({
            error: 'Method Not Allowed'
        });
    });