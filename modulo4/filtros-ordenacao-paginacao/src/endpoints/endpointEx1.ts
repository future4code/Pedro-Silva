import { Request, Response } from "express"
import { connection } from "../data/connection"

// ex 1

// a)
async function filterUserName(name :string): Promise<any> {
    const result = await connection('aula48_exercicio')
    .select('*')
    .where('name', 'like', `%${name}%`)

    return result
}

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name :any = req.query.name
        const users = await filterUserName(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

// b) 

async function filterUserByType(type :string) :Promise<any> {
    const result = await connection('aula48_exercicio')
    .select('*')
    .where('type', 'like', `%${type}%`)

    return result
}

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type
        const users = await filterUserByType(type)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

