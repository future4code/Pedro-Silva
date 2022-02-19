import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types/types";

export const getAllProducts = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        let order = req.query.order
        let sort = req.query.sort
        let search = req.query.search

        let result: Product[] = await connection('labecommerce_products')

        if (!order && !sort) {
            result = await connection('labecommerce_products')
        } else if (!search) {
            result = await connection('labecommerce_products')
        }

        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }

        if (sort !== 'name' && sort !== 'id') {
            sort = ''
        }

        if (search) {
            result = await connection('labecommerce_products')
                .where('name', 'LIKE', `%${search}%`)
        }

        if (order && sort) {
            result = await connection('labecommerce_products')
                .orderBy(sort, order)
        } 

        if(order && sort && search) {
            result = await connection('labecommerce_products')
                .where('name', 'LIKE', `%${search}%`)
                .orderBy(sort, order)
        }
        res.status(200).send({ products: result })
    } catch (error: any) {
        res.status(500).send({ message: error.message || error.sqlMessage })
    }
}