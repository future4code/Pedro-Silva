import { UserRepository } from "../business/UserRepository";
import { user } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
    protected TABLE_NAME = 'labook_users'

    insert = async (user: user) => {

        await BaseDatabase.connection(this.TABLE_NAME)
            .insert(user)

        return user
    }

    findUserByEmail = async (email: string) => {

        try {

            const result = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select('*')
                .where({ email })

            return result.length ? result[0] : null
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco")
        }
    }
}