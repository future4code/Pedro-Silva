import { Request, Response } from "express";
import { connection } from "../data/connection";

export const createProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 400
    try {

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}

