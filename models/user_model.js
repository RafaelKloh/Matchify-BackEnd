import { connection } from "../connection.js"

export async function getUserModel(data) {
    try {
        const query = `SELECT * FROM users WHERE email = '${data.email}'`
        const [results] = await connection.query(query, [data.body])
        return results
    } catch (err) {
        throw err
    }
}