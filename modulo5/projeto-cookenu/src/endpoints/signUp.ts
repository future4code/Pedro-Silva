import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../types/User";


export const signUp = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const {name, email, password, role} = req.body

        if (!name || !email || !password || !role){
            res.statusCode = 422
            throw new Error('Ausência de informações, preencha todos os campos necessários.')
        }

        const userDB = new UserDatabase()
        const checkUser = await userDB.findUserByEmail(email)

        if (checkUser) {
            res.statusCode = 409 
            throw new Error('Email existente. Usuário já cadastrado.')
        }

        const idGen = new IdGenerator()
        const id = idGen.generate()

        const hashMan = new HashManager()
        const hashPassword = await hashMan.hash(password)

        const user = new User(id, name, email, hashPassword, role)
        await userDB.createUser(user)

        const auth = new Authenticator()
        const token = auth.generate({id, role})

        res.status(200).send({message: 'Usuário Criado', access_token: token})
        
    } catch (error:any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}