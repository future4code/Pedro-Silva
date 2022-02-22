import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getUserByEmail } from "../data/getUserByEmail";
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

        if (user.password !== password) {
            throw new Error("Invalid password");
        }

        const token = generateToken({
            id: user.id,
        })

        res.status(200).send({ token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}