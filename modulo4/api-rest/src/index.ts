import { profileEnd } from "console";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { send } from "process";
import { updateFor } from "typescript";
import { TypeUser, User, users } from "./data";

const app = express();

app.use(express.json());


// Exercício 1 
app.get('/users', (req: Request, res: Response) => {
    try {
        res.status(200).send(users)
    } catch {
        res.status(400).send('Falha na requisição!')
    }
})

// a) O método http a ser usado é o GET.
// b) A entidade é a users. 

// Exercício 2 

app.get('/users/search/type', (req: Request, res: Response) => {
    try {
        const type: string = req.query.type as string
        const filteredUsers: User[] = users.filter((u) => {
            return u.type === type.toUpperCase()
        })

        if (!type) { throw new Error('Ausência de parâmetros necessários!') }

        if (type !== TypeUser.ADMIN && type !== TypeUser.NORMAL) {
            throw new Error('Inserir tipo de usuário válido: "ADMIN" ou "NORMAL"')
        }


        res.status(200).send(filteredUsers)

    } catch (error: any) {
        switch (error.message) {
            case 'Inserir tipo de usuário válido: "ADMIN" ou "NORMAL"':
                res.status(422)
                break
            case 'Ausência de parâmetros necessários!':
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// a) Através do query. Pois estamos se tratando de uma busca, então criei a lógica
// para fazer uma comparação e filtrar aparecendo apenas os types equivalentes à query passada.
// b) Utilizei o enum e criei uma lógica onde se não fosse enviado algum type daria um erro e
// se for passado algum parâmetro diferentes também levaria ao erro que mostra a indicação de
// como deve ser passado corretamente. 

// Exercício 3

app.get('/users/search/profile', (req: Request, res: Response) => {
    try {
        const profile: string = req.query.name as string
        const filteredUsers: User[] = users.filter((p) => {
            return p.name.toLowerCase() === profile.toLowerCase()
        })

        if (!profile) { throw new Error('Ausência de parâmetros necessários!') }

        if (filteredUsers.length === 0) { throw new Error('Parâmetros inválidos ou nenhum usuário encontrado!') }


        res.status(200).send(filteredUsers)

    } catch (error: any) {
        switch (error.message) {
            case 'Parâmetros inválidos ou nenhum usuário encontrado!':
                res.status(422)
                break
            case 'Ausência de parâmetros necessários!':
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// a) Query, pois se trata de uma busca para filtrar e receber a informação correspondente. 
// b) Feita.

// Exercício 4

app.post('/users', (req: Request, res: Response) => {
    try {
        const { name, email, age } = req.body
        const type = req.body.type.toUpperCase()

        if (!name || !email || !type || !age) { throw new Error('Faltam campos a serem preenchidos!') }

        if (typeof (name) !== 'string') { throw new Error('Nome inválido! Deve ser um texto.') }

        if (typeof (email) !== 'string') { throw new Error('Email inválido! Deve ser um texto.') }

        if (typeof (age) !== 'number') { throw new Error('Idade inválida! Deve ser um número.') }

        if (type !== TypeUser.ADMIN && type !== TypeUser.NORMAL) {
            throw new Error('Inserir tipo de usuário válido: "ADMIN" ou "NORMAL"')
        }

        users.push({
            id: Date.now(),
            name,
            email,
            type,
            age
        })

        res.status(201).send('Usuário Criado!')

    } catch (error: any) {
        switch (error.message) {
            case 'Faltam campos a serem preenchidos!':
                res.status(422)
                break
            case 'Nome inválido! Deve ser um texto.':
                res.status(422)
            case 'Email inválido! Deve ser um texto.':
                res.status(422)
                break
            case 'Idade inválido! Deve ser um número.':
                res.status(422)
                break
            case 'Inserir tipo de usuário válido: "ADMIN" ou "NORMAL"':
                res.status(422)
                break
            default:
                res.status(500)
        }

        res.send(error.message)

    }
})

// a) Não mudou nada, a requisição continuou funcionando e um usuário foi adicionado. 
// b) Não, pois o PUT é utilizado para alterar informações já existentes, para inserir
// algo novo o POST é uma melhor opção. 

// Desafios 

// Exercício 5
app.put('/users/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        let isUserFound = false

        users.forEach((u) => {
            if (u.id === id) {
                u.name = u.name + "-ALTERADO"
                isUserFound = true
            }
        })

        if (!isUserFound) { throw new Error('Usuário não encontrado!') }

        res.status(200).end()

    } catch (error: any) {
        switch (error.message) {
            case 'Usuário não encontrado!':
                res.status(404)
                break
            default:
                res.status(500)
        }

        res.send(error.message)
    }
})

// Exercício 6

app.patch('/users/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        let isUserFound = false

        users.forEach((u) => {
            if (u.id === id) {
                u.name = u.name + "-REALTERADO"
                isUserFound = true
            }
        })

        if (!isUserFound) { throw new Error('Usuário não encontrado!') }

        res.status(200).end()

    } catch (error: any) {
        switch (error.message) {
            case 'Usuário não encontrado!':
                res.status(404)
                break
            default:
                res.status(500)
        }

        res.send(error.message)
    }
})

// Exercício 7 

app.delete('/users/:id', (req: Request, res: Response) => {
    try {
        const id: number = Number(req.params.id)

        let isUserFound = false

        users.forEach((u, i) => {
            if (u.id === id) {
                users.splice(i, 1)
                isUserFound = true
            }
        })

        if (!isUserFound) { throw new Error('Usuário não encontrado!') }

        res.status(200).send(users)

    } catch (error: any) {
        switch (error.message) {
            case 'Usuário não encontrado!':
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