import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types/types";

export const getAllProducts = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const result: Product = await connection('labecommerce_products')
        res.status(200).send({ products: result })

    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}