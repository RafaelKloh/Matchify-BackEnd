import { json } from "express";
import { connection } from "../connection.js"
import { mysqlErro } from "../utilities/mysqlError.js";

export async function getUserModel(data) {
    try {
        const query = `SELECT * FROM users WHERE email = '${data.email}' AND password = '${data.password}'`
        const [results] = await connection.query(query, [data.body])
        return results
    } catch (err) {
        throw err
    }
}

//TODO Função responsável por criar o registro de um usuário
export async function registerUser(data) {
    try {
        var res = {}
        //? cria a query
        const query = `
  INSERT INTO users(name, email, password, verify)
  VALUES (?, ?, ?, 0)
`
        //? insere os valores da query
        const values = [data.name, data.email, data.password]

        //* valida os parametros da query

        await connection.query(query, values)
        return res = {
            'status': 200
        }
    } catch (err) {
        if (err.code && err.sqlMessage) {
            return await mysqlErro(err);
        }

        // Caso contrário, é erro interno da aplicação
        return {
            error: 'Internal Server Error',
            description: err.message
        };
    }
}

