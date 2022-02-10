import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types/types";


export const createUser = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 400
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            errorCode = 422;
            throw new Error('Faltam parâmetros a serem preenchidos!')
        }

        const user: User = {
            name: name,
            email: email,
            password: password
        }

        await connection('labecommerce_users').insert(user)

        res.status(201).send("Usuário registrado com sucesso!")
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}
