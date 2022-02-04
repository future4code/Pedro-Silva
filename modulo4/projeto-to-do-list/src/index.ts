import { AddressInfo } from "net";
import cors from 'cors'
import express, { Request, Response } from "express";
import { createTask, createUser, editUser, getTaskbyId, getUserById } from "./functions";

const app = express();
app.use(express.json());
app.use(cors());

// Requisições

app.get('/user/:id', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id: any = req.params.id
        const user = await getUserById(id)

        if (user.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
    }

})

app.get('/task/:id', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id: any = req.params.id
        const task = await getTaskbyId(id)
        const data = task[0].limit_date
        const newDate = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        const taskRealize = { ...task[0], limit_date: newDate }

        if (task.length === 0) {
            errorCode = 404
            throw new Error("Tarefa não encontrada.")
        }

        res.status(200).send(taskRealize)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
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
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})

app.post('/task', async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let { title, description, limit_date, creator_user_id } = req.body
        const arrayDate = limit_date.split('/')
        const formatDate = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`

        if (!title || !description || !limit_date || !creator_user_id) {
            errorCode = 422
            throw new Error("Faltam dados a seres preenchidos.")
        }

        await createTask(title, description, formatDate, creator_user_id)

        res.status(200).send("Tarefa Criada!")

    } catch (error: any) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})

app.put('/user/edit/:id', async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const id: any = req.params.id
        let { name, nickname } = req.body

        if (!name || !nickname) {
            res.statusCode = 422
            throw new Error("Preencha os campos necessários.")
        }

        await editUser(id, name, nickname)

        res.status(200).send("Usuário editado!")
    } catch (error: any) {
        res.status(errorCode).send({ message: error.sqlMessage || error.message })
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


