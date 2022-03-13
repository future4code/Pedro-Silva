import { UserRepository } from "../business/UserRepository";
import { add_friend } from "../model/Friend";
import { user } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
    protected TABLE_U = 'labook_users'
    protected TABLE_F = 'labook_friends'

    insert = async (user: user) => {
        try {

            await BaseDatabase.connection(this.TABLE_U)
                .insert(user)

            return user
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    findUserByEmail = async (email: string) => {
        try {

            const result = await BaseDatabase
                .connection(this.TABLE_U)
                .select('*')
                .where({ email })

            return result.length ? result[0] : null
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getFriendship = async (user_add: string, u_friend: string) => {
        try {
            const result = await BaseDatabase
                .connection(this.TABLE_F)
                .select('*')
                .where({ user_add: user_add, u_friend: u_friend })

            return result.length ? result[0] : null
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    createFriendship = async (add_friend: add_friend) => {
        try {

            await BaseDatabase.connection(this.TABLE_F)
                .insert(add_friend)

            return add_friend
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    deleteFriendship = async (user_add: string, u_friend: string) => {
        try {
            await BaseDatabase.connection(this.TABLE_F)
                .delete()
                .where({ user_add, u_friend })


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

