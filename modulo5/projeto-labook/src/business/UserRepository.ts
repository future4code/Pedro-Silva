import { add_friend } from "../model/Friend"
import { user } from "../model/User"

export interface UserRepository {
    insert(user: user): Promise<user>
    findUserByEmail(email: string): Promise<user | null>
    getFriendship(user_add: string, u_friend: string): Promise<add_friend | null>
    createFriendship(add_friend: add_friend): Promise<add_friend>
    deleteFriendship(user_add: string, u_friend: string): Promise<void>
}