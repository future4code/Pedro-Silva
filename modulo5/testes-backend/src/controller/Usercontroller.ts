import { Request, Response } from "express";
import { UserBusiness } from "../business/Userbusiness";
import { UserDatabase } from "../data/UserDataBase";




export class UserController {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness(new UserDatabase())
    }

    getUserById = async (req: Request, res: Response) => {
        const id = req.params.id as string
        
        try {

            const result = await this.userBusiness.getUserById(id)
            console.log(id)

            res.status(200).send({result})
        } catch (error: any) {
            console.log('controller', error.message)
            res.status(404).send(error.message);
        }
    }




    // async signUp(req: Request, res: Response) {
    //     try {
    //         const input = {
    //             email: req.body.email,
    //             name: req.body.name,
    //             password: req.body.password,
    //             role: req.body.role
    //         }

    //         const token = await userBusiness.createUser(input);

    //         res.status(200).send({ token });

    //     } catch (error: any) {
    //         res.status(400).send({ error: error.message });
    //     }
    // }

    // async login(req: Request, res: Response) {
    //     try {
    //         const input = {
    //             email: req.body.email,
    //             password: req.body.password
    //         }

    //         const token = await userBusiness.getUserByEmail(input)

    //         res.status(200).send({ token });

    //     } catch (error: any) {
    //         res.status(400).send({ error: error.message });
    //     }
    // }

    // async getAllUsers(req: Request, res: Response) {
    //     try {
    //         const token = req.headers.authorization
    //         const result: user[] = await userBusiness.getAll(token as string)

    //         res.status(200).send({ result: result })

    //     } catch (error: any) {
    //         res.status(400).send({ error: error.message });
    //     }
    // }

    // async deleteUser(req: Request, res: Response) {
    //     try {
    //         const input = {
    //             id: req.params.id,
    //             token: req.headers.authorization as string
    //         }

    //         await userBusiness.delUser(input)

    //         res.status(200).send({ message: 'Usuário deletado' })

    //     } catch (error: any) {
    //         res.status(400).send({ error: error.message });
    //     }
    // }
}
