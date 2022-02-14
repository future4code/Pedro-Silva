import { Request, Response } from "express"
import { connection } from "../data/connection"

// Exercício 2 

async function orderedUsers(sort: string, order: string): Promise<any> {
    const result = await connection('aula48_exercicio')
        .orderBy(`${sort}`, `${order}`)

    return result
}

export const getOrderedUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let sort = req.query.sort as string
        let order = req.query.order as string
        if (sort !== "name" && sort !== "type") {
            sort = "email";
        }

        if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC";
        }



        const users = await orderedUsers(sort, order)


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