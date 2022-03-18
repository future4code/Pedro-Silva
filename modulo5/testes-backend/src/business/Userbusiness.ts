import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";
import { user } from "../types/user";
import { UserRepository } from "./UserRepository";



export class UserBusiness {
    private userDatabase: UserRepository
    private idGenerator: IdGenerator
    private hashManager: HashManager
    private authentication: Authenticator
    constructor(userDataImplementation: UserRepository) {
        this.userDatabase = userDataImplementation
        this.idGenerator = new IdGenerator()
        this.hashManager = new HashManager()
        this.authentication = new Authenticator()
    }

    async getUserById(id: string) {
        console.log('bussiness', id)
        const user: user = await this.userDatabase.getUserById(id);
        

        if (!user) {
            throw new Error("User not found")
        }

        return user
    }



    // async createUser(user:any) {

    //     try {

    //         if (!user.name || !user.email || !user.password || !user.role) {
    //             throw new Error("Please fill all the fields");
    //         }

    //         if (user.email.indexOf("@") === -1) {
    //             throw new Error("Invalid Email");
    //         }

    //         if (user.password.length < 6) {
    //             throw new Error("Password must have at least 6 characters");
    //         }

    //         const id = generateId();
    //         const hashPassword = await hash(user.password);

    //         const newUser: user = {
    //             id: id,
    //             email: user.email,
    //             name: user.name,
    //             password: hashPassword,
    //             role: user.role
    //         }


    //         await userDB.createUser(newUser)
    //         const token = generateToken({ id, role: user.role });

    //         return token


    //     } catch (error: any) {
    //         throw new Error(error.message || "Error creating user. Please check your system administrator.");
    //     }
    // }

    // async getUserByEmail(user: any) {

    //     const checkUser = await userDB.findUserByEmail(user.email)

    //     const passCompare = await compare(user.password, checkUser.password)

    //     const token = generateToken({id: checkUser.id, role: checkUser.role})

    //     if (!passCompare) {
    //         throw new Error("Invalid Password!");
    //     }

    //     return token
    // }

    // async getAll(token:string) {

    //     getTokenData(token)

    //     const result = await userDB.getAllUsers()

    //     return result
    // }

    // async delUser(input: {id: string, token: string}) {

    //     const isToken = getTokenData(input.token)

    //     if(isToken.role !== "ADMIN"){
    //         throw new Error("Apenas ADMINS podem deletar usuários.")
    //     }

    //     const user = userDB.findUserById(input.id)

    //     if(!user){
    //         throw new Error('Usuário não encontrado.')
    //     }

    //     return await userDB.deleteUser(input.id)

    // }
}