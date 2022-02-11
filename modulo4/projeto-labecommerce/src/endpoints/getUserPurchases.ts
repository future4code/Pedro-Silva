import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserPurchases = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 400
    try {
        const user_id = req.params.user_id

        const result = await connection('labecommerce_purchases')
            .select('user_id', 'labecommerce_users.name as user_name', 'labecommerce_products.name', 'quantity', 'total_price')
            .innerJoin('labecommerce_users', 'user_id', 'labecommerce_users.id')
            .innerJoin('labecommerce_products', 'product_id', 'labecommerce_products.id')
            .where('user_id', user_id)

        if (result.length === 0) {
            errorCode = 404 
            throw new Error('Id de usuário não encontrado!')
        }

        res.status(200).send({ result: result })
    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}