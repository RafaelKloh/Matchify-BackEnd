import { getUserModel, registerUser } from "../models/user_model.js"


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
    console.log(req)
    const dados = req.body
    const user = await registerUser(dados)
    if (user.status == 'success') {
        return res.status(200).json({ response: 'User created succefully!' })
    }
    else{
        return res.status(400).json(user)
    }
}