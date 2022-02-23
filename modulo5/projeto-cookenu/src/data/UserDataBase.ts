import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await UserDatabase.connection('cookenu_users')
                .select('*')
                .where({ email })

            return user[0] && User.toUserModel(user[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async createUser(user: User) {
        try {
            await BaseDatabase.connection('coonkenu_users')
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPass(),
                role: user.getRole()
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}