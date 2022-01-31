import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { allowedNodeEnvironmentFlags } from "process";
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

app.get('/users/balance', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, CPF } = req.query

        if (!name || !CPF) {
            errorCode = 422;
            throw new Error("Preencha devidamente os campos para acessar as informações")
        }

        users.forEach((u) => {
            if (u.name === name && u.CPF === CPF) {
                return res.status(200).send(`Olá ${u.name}, seu saldo é R$${u.balance}`)

            } else if (u.name === name && u.CPF !== CPF || u.name !== name && u.CPF === CPF) {
                errorCode = 422;
                throw new Error('Conta inexistente')
            }
        })

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/users/:cpf', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        users.forEach((u) => {
            if (u.CPF === req.params.cpf) {
                return res.status(200).send(`Olá ${u.name}, seu saldo é R$${u.balance}`)
            } else if (req.params.cpf === undefined || req.params.cpf !== u.CPF) {
                errorCode = 422
                throw new Error('Conta não encontrada ou parâmetro inválido!')
            }
        })

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

app.post('/users/pay', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let { value, date, CPF, description } = req.body

        let isCPFexist = false

        if (typeof CPF === "number") {
            errorCode = 422
            throw new Error('Insira um CPF válido, como o seguinte exemplo: "111.222.333-4"')
        }

        if (typeof value === "string") {
            errorCode = 422
            throw new Error('Insira um valor válido, deve ser um número')
        }

        if (!value || !CPF || !description) {
            errorCode = 422
            throw new Error('Parâmetros ausentes')
        }

        if (!date) {
            function realizeDate(numero: number): number | string {
                if (numero <= 9)
                    return "0" + numero;
                else
                    return numero;
            }
            const actualDate = new Date()
            const dateFormat = (realizeDate(actualDate.getDate()) + "/" + (realizeDate(actualDate.getMonth() + 1)) + "/" + actualDate.getFullYear());
            date = dateFormat
        } else if (date) {
            const pastDate = new Date()
            const arrayDate = date.split('/')

            if (arrayDate[2] < pastDate.getFullYear() ||
                arrayDate[1] < pastDate.getMonth() + 1 ||
                (arrayDate[1] <= pastDate.getMonth() + 1 && arrayDate[0] < pastDate.getDate())
            ) {
                errorCode = 422;
                throw new Error("Não pode inserir uma data já passada");
            }
        }

        users.forEach((u) => {
            if (u.CPF === CPF) {
                if (u.balance < value) {
                    errorCode = 422
                    throw new Error("Saldo insuficiente")

                } else {
                    isCPFexist = true
                    u.extract.push({
                        date,
                        value,
                        description
                    })
                }
            }
        })

        if (!isCPFexist) {
            errorCode = 404
            throw new Error('Erro, não foi encontrado cadastro no banco')
        }

        res.status(200).send('Pagamento agendado/realizado')

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/users/balance', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, CPF, balance } = req.body

        if (typeof CPF === "number") {
            errorCode = 422
            throw new Error('Insira um CPF válido, como o seguinte exemplo: "111.222.333-4"')
        }

        if (!name || !CPF || !balance) {
            errorCode = 422;
            throw new Error("Faltam parâmetros a serem passados")
        }

        if (balance < 0) {
            throw new Error("Não é permitido diminuir seu saldo nessa funcionalidade")
        }

        // Data 
        function realizeDate(numero: number): number | string {
            if (numero <= 9)
                return "0" + numero;
            else
                return numero;
        }

        const actualDate = new Date()
        const dateFormat = (realizeDate(actualDate.getDate()) + "/" + (realizeDate(actualDate.getMonth() + 1)) + "/" + actualDate.getFullYear());

        users.forEach((u) => {
            if (u.CPF === CPF && u.name === name) {
                u.balance = u.balance + balance
                u.extract.push({
                    date: dateFormat,
                    value: balance,
                    description: 'Depósito de dinheiro'

                })
                res.status(200).send(`${u.name}, com o adicional de ${balance} seu novo saldo é ${u.balance} `)

            } else if (u.CPF !== CPF || u.name !== name) {
                errorCode = 404;
                throw new Error("Dados inseridos não encontrados")
            } else if (balance < u.balance) {
                throw new Error("Você não pode negativar o saldo por este endpoint")
            }
        })


    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

app.put('/users/update', (req: Request, res: Response) => {
    let errorCode = 400
    try {

        if (!req.body.CPF) {
            errorCode = 422;
            throw new Error("Necessário informar o CPF para atualizar")
        }

        users.forEach((u) => {
            if (req.body.CPF === u.CPF) {
                u.extract.forEach((e, i) => {
                    if (e.description !== "Depósito de dinheiro") {
                        for (let i = 0; i < users[i].extract.length; i++) {
                            users[i].balance = users[i].balance - users[i].extract[i].value
                        }
                    }
                })
            }
        })

        res.status(200).send('Conta atualizada!')

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