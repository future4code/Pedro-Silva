import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectByPage(size: number, offset:number): Promise<any> {
    const result = await connection('aula48_exercicio')
    .limit(size)
    .offset(offset)

    return result
}

export const getUserByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page: number = Number(req.query.page)
        let size = 5
        let offset = size * (page - 1)
        const users = await selectByPage(size, offset)

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