import { Request, Response } from "express";
import { UserBusiness } from "../business/Userbusiness";
import { user } from "../types/user";

const userBusiness = new UserBusiness()

export class UserController {

    async signUp(req: Request, res: Response) {
        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}
