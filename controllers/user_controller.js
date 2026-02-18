import { getUserModel, registerUser } from "../models/user_model.js"
import * as utils from "../utilities/functions.js"

//TODO Função responsável por válidar o email enviado pelo usuário
export async function email(req, res) {
    const dados = req.body
    const user = await getUserModel(dados)
    if (user.length == 0) {
        return res.status(404).json({ erro: 'Incorrect email or password' })
    }
    return res.status(200).json(user[0])
}

export async function registerUserController(req, res) {
    try {
        const data = req.body
        utils.validateRegisterUser(data.email, data.password,data.name)
        const user = await registerUser(data)
        if (user.status == 200) {
            return res.status(200).json({
                status: 200,
                message: 'User created succefully!'
            })
        }
        else {
            return res.status(400).json(user)
        }
    }
    catch (err) {

        return res.status(err.status || 500).json({
            error: err.error || 'Internal Server Error',
            message: err.message || 'Unexpected error'
        });
    }
}