import { getUserModel } from "../models/user_model.js"

export async function email(req, res) {
    console.log("hjaaaaaaaaaaaaaaaa")
    const dados = req.body
    const user = await getUserModel(dados)
    if (user.length == 0) {
        return res.status(404).json({ erro: 'email inválido' })
    }
    return res.status(200).json(user[0])
}