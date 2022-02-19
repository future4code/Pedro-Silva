import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Purchase, User } from "../types/types";

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const users: User[] = await connection('labecommerce_users')

        const purchases :Purchase= await connection('labecommerce_purchases')
        .select('labecommerce_purchases.id', 'labecommerce_purchases.user_id', 'labecommerce_users.name as user_name', 'labecommerce_products.name','quantity', 'total_price')
        .innerJoin('labecommerce_users', 'user_id', 'labecommerce_users.id')
        .innerJoin('labecommerce_products', 'product_id', 'labecommerce_products.id')

        const userPurchase = {users, purchases}

        res.status(200).send({userPurchase})
    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}