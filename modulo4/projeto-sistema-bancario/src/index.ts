import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { users } from "./data";


const app = express();
app.use(express.json());

// Requisições 

app.get('/users', (req: Request, res: Response) => {
    let errorCode = 400
    try {

        if (users.length === 0) {
            throw new Error("Banco de dados vazio")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.post('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {

        const { name, CPF, birthDate } = req.body

        // Pegando Idade

        const [year, month, day] = birthDate.split('/')
        const actualDate: number = new Date().getTime()
        const userBirthDate: number = new Date(`${year}-${month}-${day}`).getTime()
        const age: number = (actualDate - userBirthDate) / 1000 / 60 / 60 / 24 / 365

        //Validando se CPF existe

        users.forEach((u) => {
            if (CPF === u.CPF) {
                errorCode = 409;
                throw new Error("CPF já utilizado")
            }
        })

        // if (CPF.contains("1", "2","3","4", "5", "6", "7", "8", "9", "0") )

        if (typeof CPF === "number") {
            errorCode = 422
            throw new Error('Insira um CPF válido, como o seguinte exemplo: "111.222.333-4"')
        }

        if (age < 18) {
            errorCode = 422;
            throw new Error("Para criar a conta você deve ter mais de 18 anos")
        }

        if (!name || !CPF || !birthDate) {
            errorCode = 422;
            throw new Error("Faltam parâmetros a serem passados")
        }


        users.push({
            name,
            CPF,
            birthDate,
            balance: 0,
            extract: []
        })

        res.status(200).send(users)


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


