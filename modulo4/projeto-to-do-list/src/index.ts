import { AddressInfo } from "net";
import cors from 'cors'
import express, { Request, Response } from "express";
import { createUser, getUserById } from "./functions";

const app = express();
app.use(express.json());
app.use(cors());



// Requisições

app.get('/user/:id', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id :any = req.params.id

        const user = await getUserById(id)

        if (user.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

app.post('/user', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            errorCode = 422
            throw new Error("Faltam parâmetros na requisição.")
        }

        await createUser(name, nickname, email)

        res.status(200).send("Usuário criado com sucesso!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/user/edit/:id', async (req: Request, res: Response) => {
    let errorCode = 400;
    try{
        const id :any = req.params.id 
        let { name, nickname} = req.body

        


        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
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
