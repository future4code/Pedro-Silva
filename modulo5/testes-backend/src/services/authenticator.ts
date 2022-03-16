import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/user"

export class Authenticator {

generateToken (input: authenticationData) :string {
   const token = jwt.sign(
      {
         id: input.id,
         role: input.role
      },
      process.env.JWT_KEY as string,
      {
         expiresIn: '24h'
      }
   )
   return token
}

getTokenData = (
   token: string
): authenticationData => {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as authenticationData
}

}