import { U_ROLES } from "./types";

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: U_ROLES,
    ) { }

    getId = (): string => {
        return this.id
    }

    getName = (): string => {
        return this.name
    }

    getEmail = (): string => {
        return this.email
    }

    getPass = (): string => {
        return this.password
    }

    getRole = (): U_ROLES => {
        return this.role
    }

    static toUserModel(data :any) :User {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
}