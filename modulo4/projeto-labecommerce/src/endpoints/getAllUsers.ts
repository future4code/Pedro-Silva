import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types/types";

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 400
    try {
        const result :User[] = await connection('labecommerce_users')

        res.status(200).send({users: result})

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}