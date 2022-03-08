import { UserDatabase } from "../data/UserDataBase";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { user, USER_ROLES } from "../types/user";

const userDB = new UserDatabase()

export class UserBusiness {

    async createUser(user:any) {

        try {

            if (!user.name || !user.email || !user.password || !user.role) {
                throw new Error("Please fill all the fields");
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Invalid Email");
            }

            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters");
            }

            const id = generateId();
            const hashPassword = await hash(user.password);

            const newUser: user = {
                id: id,
                email: user.email,
                name: user.name,
                password: hashPassword,
                role: user.role
            }


            await userDB.createUser(newUser)
            const token = generateToken({ id, role: user.role });

            return token


        } catch (error: any) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }

}