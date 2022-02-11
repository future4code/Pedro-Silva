import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types/types";

export const createPurchase = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 400
    try {
        const { user_id, product_id, quantity } = req.body
        if (!user_id || !product_id || !quantity) {
            errorCode = 422
            throw new Error('Faltam parâmetros a serem passados!')
        }

        const user = await connection('labecommerce_users')
            .select().where('id', user_id)
        if (user.length === 0) {
            errorCode = 404
            throw new Error('Id de usuário não encontrado!')
        }

        const product: Product[] = await connection('labecommerce_products')
            .select('name', 'price').where('id', product_id)
        if (product.length === 0) {
            errorCode = 404
            throw new Error('Id de produto não encontrado!')
        }

        const total_price: number = quantity * product[0].price
        const purchase = {
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        }

        await connection('labecommerce_purchases')
            .insert(purchase)

        res.status(200).send(purchase)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlMessage })
    }
}