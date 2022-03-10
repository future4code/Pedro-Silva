import { user } from "../model/User"

export interface UserRepository{
    insert(user: user):Promise<user>
    findUserByEmail(email: string):Promise<user | null>
}