import { Request, Response } from "express";
import { createUserData } from "../data/createUserFunc";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password } = req.body

      if (!email || email.indexOf("@") === -1) {
         throw new Error("Email inválido")
      }


      if (!password || password.length < 6) {
         throw new Error("Senha inválida, deve ter 6 dígitos")
      }

      const id = generateId()

      await createUserData(id, email, password)

      const token = generateToken({id})

      res.status(200).send({token})

   } catch (error: any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}