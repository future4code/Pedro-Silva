import { UserDatabase } from "../data/Userdatabase";
import { signupInputDTO, user, userData } from "../model/user";
import { generateToken } from "../services/authenticator";
import { compare, hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

const userDB = new UserDatabase()

export class UserBusiness {
    signupBusiness = async (
        userData: signupInputDTO
    ): Promise<string> => {

        if (
            !userData.name ||
            !userData.nickname ||
            !userData.email ||
            !userData.password ||
            !userData.role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const cypherPassword = await hash(userData.password);

        const newUser: user = {
            ...userData,
            password: cypherPassword,
            id: generateId()
        }

        await userDB.insertUser(newUser)

        const token: string = generateToken({
            id: newUser.id,
            role: userData.role
        })

        return token
    }

    loginBusiness = async (
        email: string,
        password: string
     ) => {
        if (!email || !password) {
           throw new Error("'email' e 'senha' são obrigatórios")
        }
     
        const user: user = await userDB.selectUserByEmail(email)
     
        if (!user) {
           throw new Error("Usuário não encontrado ou senha incorreta")
        }
     
        const passwordIsCorrect: boolean = await compare(password, user.password)
     
        if (!passwordIsCorrect) {
           throw new Error("Usuário não encontrado ou senha incorreta")
        }
     
        const token: string = generateToken({
           id: user.id,
           role: user.role
        })
     
        return token
     }
}