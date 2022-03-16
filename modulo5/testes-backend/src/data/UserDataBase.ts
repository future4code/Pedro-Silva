import { user } from "../types/user";
import { BaseDatabase } from "./Basedatabase";

export class UserDatabase extends BaseDatabase {

    // async createUser(user: user): Promise<void> {
    //     try {
    //         await BaseDatabase.connection('User_Arq')
    //             .insert({
    //                 id: user.id,
    //                 name: user.name,
    //                 email: user.email,
    //                 password: user.password,
    //                 role: user.role
    //             })
    //     } catch (error: any) {
    //         throw new Error(error.sqlMessage || error.message)
    //     }
    // }

    // async findUserByEmail(email: string): Promise<user> {
    //     try {
    //         const result = await BaseDatabase.connection('User_Arq')
    //             .select("*")
    //             .where({ email })
    //         return result[0]
    //     } catch (error: any) {
    //         throw new Error(error.sqlMessage || error.message)
    //     }
    // }

    // async getAllUsers(): Promise<user[]> {
    //     try {

    //         const result = await BaseDatabase.connection('User_Arq')
    //             .select('*')

    //         return result

    //     } catch (error: any) {
    //         throw new Error(error.sqlMessage || error.message)
    //     }
    // }

    async getUserById(id: string): Promise<user>{
        try {
            const result :user[]= await BaseDatabase.connection('User_Arq')
                .select("*")
                .where('id', id)

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    // async deleteUser(id:string) :Promise<void> {
    //     try {
    //         await BaseDatabase.connection('User_Arq')
    //         .where('id', id)
    //         .del()
            
    //     } catch (error: any) {
    //         throw new Error(error.sqlMessage || error.message)
    //     }
    // }



}