import * as bcrypt from 'bcryptjs'

export class HashManager {
    async hash(plaintext: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(plaintext, salt)
    }

    async compare(plaintext: string, hash: string): Promise<boolean> {
        return bcrypt.compare(plaintext, hash)
    }
}