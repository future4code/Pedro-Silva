import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export const getUserProfile = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const token = req.headers.authorization as string

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
        const profile = await userDB.getProfile(checkToken.id)

        res.status(200).send(profile)

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}