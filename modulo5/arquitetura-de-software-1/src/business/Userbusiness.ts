import { UserDatabase } from "../data/UserDataBase";
import { generateToken, getTokenData } from "../services/authenticator";
import { compare, hash } from "../services/hashManager";
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

    async getUserByEmail(user: any) {

        const checkUser = await userDB.findUserByEmail(user.email)

        const passCompare = await compare(user.password, checkUser.password)

        const token = generateToken({id: checkUser.id, role: checkUser.role})

        if (!passCompare) {
            throw new Error("Invalid Password!");
        }
        
        return token
    }

    async getAll(token:string) {

        getTokenData(token)

        const result = await userDB.getAllUsers()

        return result
    }

    async delUser(input: {id: string, token: string}) {

        const isToken = getTokenData(input.token)

        if(isToken.role !== "ADMIN"){
            throw new Error("Apenas ADMINS podem deletar usu??rios.")
        }

        const user = userDB.findUserById(input.id)

        if(!user){
            throw new Error('Usu??rio n??o encontrado.')
        }

        return await userDB.deleteUser(input.id)

    }
}