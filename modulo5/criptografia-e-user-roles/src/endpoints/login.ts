import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { compareHash } from "../services/cryptoSecurity";
import { generateToken } from "../services/generateToken";

export async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email inválido")
        }

        const user = await getUserByEmail(email)

        const comparePass = compareHash(password, user.password)

        if (!comparePass) {
            throw new Error("Password inválido")
        }

        const token = generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({ token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}