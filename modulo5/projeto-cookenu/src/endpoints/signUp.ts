import { Request, Response } from "express";


export const signUp = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        
    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}