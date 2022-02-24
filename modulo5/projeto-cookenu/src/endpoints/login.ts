import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../types/User";


export const login = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const {email, password} = req.body

        if (!email || !password){
            res.statusCode = 422
            throw new Error('Ausência de informações, preencha todos os campos necessários.')
        }

        const userDB = new UserDatabase()
        const checkUser = await userDB.findUserByEmail(email)

        if (!checkUser) {
            res.statusCode = 409 
            throw new Error('Email não cadastrado! Usuário não encontrado.')
        }

        const hashMan = new HashManager()
        const passwordIsCorrect = hashMan.compare(password, checkUser.getPass())

        if(!passwordIsCorrect){
            res.statusCode = 401
            throw new Error('Email ou senha incorretos.')
        }

        const auth = new Authenticator()
        const token = auth.generate({
            id: checkUser.getId(),
            role: checkUser.getRole()
        })

        res.status(200).send({message: 'Usuário logado.', access_token: token})
        
    } catch (error:any) {
        res.send(error.sqlMessage || error.message)
    }
}