import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types/types";

export const createProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 400
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            errorCode = 422;
            throw new Error('Faltam parâmetros a serem preenchidos!')
        }

        if (typeof price === "string" || price < 0) {
            errorCode = 422;
            throw new Error('"Price" deve ser um número e maior que zero!')
        }

        const product :Product = {
            name: name, 
            price: price, 
            image_url: image_url
        }

        await connection('labecommerce_products').insert(product)

        res.status(201).send('Produto cadastrado!')
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}

