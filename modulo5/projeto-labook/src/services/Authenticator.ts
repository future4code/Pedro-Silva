import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { authenticationData } from "../model/User"

dotenv.config()

class Authenticator {

    generateToken(
        payload: authenticationData
    ): string {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
    }

    getTokenData(
        token: string
    ): authenticationData {
        const result: any = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return { id: result.id, }
    }
}

export default new Authenticator()

