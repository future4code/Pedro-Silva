import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id

        if (!token) {
            res.statusCode = 422
            throw new Error("Ausência de token. Deve ser inserido um token de autorização.")
        }

        const auth = new Authenticator()
        const checkToken = auth.getTokenData(token)

        if (!checkToken) {
            res.statusCode = 401
            throw new Error("Token inválido ou expirado.")
        }

        const userDB = new UserDatabase()
        const user = await userDB.getProfile(id)

        if (!user) {
            res.statusCode = 404
            throw new Error("ID não encontrado.")
        }

        res.status(200).send(user)

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}