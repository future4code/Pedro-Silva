import { compareSync, genSaltSync, hashSync } from "bcryptjs"
import * as bcrypt from "bcryptjs";
import dotenv from "dotenv"

dotenv.config()

export const createHash = (plainText: string): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = genSaltSync(rounds)
    const result: string = hashSync(plainText, salt)

    return result
}

export const compareHash = (plainText: string, hash: string): boolean => {
    return compareSync(plainText, hash)
}
