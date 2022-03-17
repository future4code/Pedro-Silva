import { isNamedTupleMember } from "typescript";
import { add_friend, friendInputDTO } from "../model/Friend";
import { LoginInputDTO, SignupInputDTO, user } from "../model/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import ValidateEmail from "../services/ValidateEmail";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    private userData: UserRepository
    constructor(userDataImplementation: UserRepository) {
        this.userData = userDataImplementation
    }

    signup = async (input: SignupInputDTO) => {
        const { name, email, password } = input
        if (!email || !name || !password) {
            throw new Error('Ausência de parâmetros. Preencha os devidos campos.')
        }

        const emailCorrect = ValidateEmail.validateEmail(email)
        if (emailCorrect === false) {
            throw new Error('Email inválido, preencha com um válido.')
        }

        if (password.length < 6) {
            throw new Error('Senha deve possuir no mínimo 6 caracteres.')
        }

        const isUserRegistered = await this.userData.findUserByEmail(email)
        if (isUserRegistered) {
            throw new Error("Email já cadastrado")
        }

        const id = IdGenerator.generateId()
        const hashPassword = await HashManager.hash(password)

        const newUser: user = {
            id: id,
            name: name,
            email: email,
            password: hashPassword
        }

        await this.userData.insert(newUser)

        const token = Authenticator.generateToken({ id })

        return token
    }

    login = async (input: LoginInputDTO) => {
        const { email, password } = input
        if (!email || !password) {
            throw new Error('Ausência de parâmetros. Preencha os devidos campos')
        }

        const emailCorrect = ValidateEmail.validateEmail(email)
        if (emailCorrect === false) {
            throw new Error('Email inválido, preencha com um válido.')
        }

        const isUser = await this.userData.findUserByEmail(email)
        if (!isUser) {
            throw new Error('Email ou senha incorretos')
        }

        const isPasswordCorrect = await HashManager.compare(password, isUser.password)
        if (!isPasswordCorrect) {
            throw new Error('Email ou senha incorretos')
        }

        const token = Authenticator.generateToken({ id: isUser.id })

        return token
    }

    createFriendship = async (input: friendInputDTO, token: string) => {
        if (!input.u_friend) {
            throw new Error('Ausência de parâmetros. Preencha os devidos campos')
        }

        if (!token) {
            throw new Error('Não autorizado, token ausente.')
        }

        const isToken = Authenticator.getTokenData(token)
        if (!isToken || isToken === null) {
            throw new Error('Token inválido')
        }

        const id = IdGenerator.generateId()
        const id_2 = IdGenerator.generateId()
        const friendAdd: add_friend = {
            id: id,
            user_add: isToken.id,
            u_friend: input.u_friend
        }

        const reverseFriendAdd: add_friend = {
            id: id_2,
            user_add: input.u_friend,
            u_friend: isToken.id
        }

        const checkFriend_1 = await this.userData.getFriendship(isToken.id, input.u_friend)
        const checkFriend_2 = await this.userData.getFriendship(input.u_friend, isToken.id)

        if (checkFriend_1 || checkFriend_2) {
            throw new Error('Você já possui uma amizade com essa pessoa.')
        }

        if (isToken.id === input.u_friend) {
            throw new Error('Você não pode ser amigo de você mesmo.')
        }

        await this.userData.createFriendship(friendAdd)
        await this.userData.createFriendship(reverseFriendAdd)
    }

    deleteFriendship = async (input: friendInputDTO, token: string) => {
        if (!input.u_friend) {
            throw new Error('Ausência de parâmetros. Preencha os devidos campos')
        }

        if (!token) {
            throw new Error('Não autorizado, token ausente.')
        }

        const isToken = Authenticator.getTokenData(token)
        if (!isToken || isToken === null) {
            throw new Error('Token inválido')
        }

        if (isToken.id === input.u_friend) {
            throw new Error('Você não desfazer uma amizade com você mesmo.')
        }

        const checkFriend_1 = await this.userData.getFriendship(isToken.id, input.u_friend)
        const checkFriend_2 = await this.userData.getFriendship(input.u_friend, isToken.id)

        if (checkFriend_1 || checkFriend_2) {
            await this.userData.deleteFriendship(isToken.id, input.u_friend)
            await this.userData.deleteFriendship(input.u_friend, isToken.id)

        } else if (!checkFriend_1 && !checkFriend_2) {
            throw new Error('Você ainda não é amigo desta pessoa.')
        }
    }
}

