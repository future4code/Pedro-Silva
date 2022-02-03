import { AddressInfo } from "net";
import cors from 'cors'
import express, { Request, Response } from "express";
import { connection } from "./connection";
import { count } from "console";

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1

//a) 

//b) 
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result
}

//c)
const getCountActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `);

    const count = result[0][0].count

    return count
}

// Exercício 2 

// a) 

const updateSalaryActor = async (id: string, salary: number): Promise<any> => {
    await connection('Actor')
        .update({
            salary: salary
        })
        .where('id', id)
}

//b) 

const deleteActor = async (id: string): Promise<any> => {
    await connection('Actor')
        .delete()
        .where('id', id)
}

//c) 

const averagePerGender = async (gender: string): Promise<any> => {
    const result = await connection('Actor')
        .avg("salary as average")
        .where('gender', gender)

    return result[0].average
}

// Exercício 3

// a) 

app.get('/actor/:id', async (req :Request, res: Response) :Promise<void> =>  {
    try{
        const id = req.params.id
        const result = await connection('Actor')
        .where('id', id)

        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

//b) 
app.get('/actor', async (req :Request, res: Response) :Promise<void> =>  {
    try{
        const result = await connection('Actor')
        .count() 
        .where('gender', req.query.gender as string)

        console.log(count)

        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

// Exercicio 4 

// a) 
app.put('/actor/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection("Actor")
            .update({
                salary: req.body.salary
            })
            .where('id', req.params.id)

        res.send('Success!')
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

//b) 

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
