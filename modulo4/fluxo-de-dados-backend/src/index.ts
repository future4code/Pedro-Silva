import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { Product, products } from "./data";

const app = express();

app.use(express.json());

// Exercício 1
app.get('/test', (req: Request, res: Response) => {
    const message: string = 'Está funcional!'
    res.status(200).send(message)
})

// Exercício 4 
app.get('/products', (req: Request, res: Response) => {
    const result: Product[] = products

    res.status(200).send(result)
})

// Exercício 3 e 7

app.post('/product', (req: Request, res: Response) => {
    try {
        const { nameProduct, price } = req.body

        if (price <= 0) { throw new Error('"Price" deve ser maior que 0!') }

        if (!nameProduct || !price) { throw new Error('Um ou mais campos faltando!') }

        if (typeof (nameProduct) !== 'string') { throw new Error('O campo "nameProduct" deve ser uma string!') }

        if (typeof (price) !== typeof (1)) { throw new Error('O "price" informado deve ser um número!') }

        products.push({
            id: Date.now().toString(),
            nameProduct,
            price
        })

        res.status(201).send(products)

    } catch (error: any) {
        switch (error.message) {
            case '"Price" deve ser maior que 0!':
                res.status(422)
                break
            case 'O "price" informado deve ser um número!':
                res.status(422)
                break
            case 'O campo "nameProduct" deve ser uma string!':
                res.status(422)
                break
            case 'Um ou mais campos faltando!':
                res.status(422)
                break
            default:
                res.status(500)
        }

        res.send(error.message)

    }
})

// Exercício 5 e 8

app.put('/editPrice/:id', (req: Request, res: Response) => {
    try {
        const productId = req.params.id

        if (req.body.price <= 0) { throw new Error('Preço deve ser maior que 0!') }

        if (!req.body.price) { throw new Error('Novo preço não informado!') }

        if (typeof (req.body.price) !== typeof (1)) { throw new Error('O preço informado deve ser um número!') }


        let isProductFound = false

        products.forEach((p) => {
            if (p.id === productId) {
                p.price = req.body.price
                isProductFound = true
            }
        })

        if (!isProductFound) { throw new Error('Produto não encontrado!') }

        res.status(200).send(products)

    } catch (error: any) {
        switch (error.message) {
            case 'Novo preço não informado':
                res.status(422)
                break
            case 'O preço informado deve ser um número!':
                res.status(422)
                break
            case 'Preço deve ser maior que 0!':
                res.status(422)
                break
            case 'Produto não encontrado!':
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// Exerício 6 e 9

app.delete('/product/:id', (req: Request, res: Response) => {
    try {
        const idToDelete = req.params.id

        let isProductFound = false

        products.forEach((p, index) => {
            if (p.id === idToDelete) {
                products.splice(index, 1)
                isProductFound = true
            }
        })

        if (!isProductFound) { throw new Error('Produto não encontrado!') }


        res.status(200).send(products)
    } catch (error: any) {
        switch (error.message) {
            case 'Produto não encontrado!':
                res.status(404)
                break
            default:
                res.status(500)
        }

        res.send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;


