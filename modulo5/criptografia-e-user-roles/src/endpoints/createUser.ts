import { Request, Response } from "express";
import { createUserData } from "../data/createUserFunc";
import { createHash } from "../services/cryptoSecurity";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password, role } = req.body

      if (!email || email.indexOf("@") === -1) {
         throw new Error("Email inválido")
      }

      if (!password || password.length < 6) {
         throw new Error("Senha inválida, deve ter 6 dígitos")
      }

      const hashPassword = createHash(password)

      const id = generateId()

      await createUserData(id, email, hashPassword)

      const token = generateToken({
         id,
         role: role
      })

      res.status(200).send({ token })

   } catch (error: any) {

      // if (res.statusCode === 200) {
      //    res.status(500).send({ message: "Internal server error" })
      // } else {
      res.send({ message: error.message })
      // }
   }
}