import { user } from "../types/user";


export interface UserRepository{
    getUserById(id: string): Promise<user>
}