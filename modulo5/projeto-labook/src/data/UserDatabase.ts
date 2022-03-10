import { user } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    protected TABLE_NAME = 'labook_users'

    signup = async (user :user) :Promise<void> => {

        await BaseDatabase.connection(this.TABLE_NAME)
        .insert(user)
    }

    findUserByEmail = async (email: string): Promise<user> => {

        const user = await BaseDatabase.connection(this.TABLE_NAME)
            .select('*')
            .where({email})

        return user[0]
    }
}