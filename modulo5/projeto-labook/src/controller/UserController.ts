import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { SignupInputDTO } from "../model/User";

export class UserController {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness(new UserDatabase())
    }

    signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }

        try {

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro no signup")
        }
    }
}