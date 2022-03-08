import { user } from "../types/user";
import { BaseDatabase } from "./Basedatabase";

export class UserDatabase extends BaseDatabase {

    async createUser(user: user): Promise<void> {
        try {
            await BaseDatabase.connection('User_Arq')
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role
                })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }



}