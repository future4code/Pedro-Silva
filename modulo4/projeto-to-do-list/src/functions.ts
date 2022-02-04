import { FileWatcherEventKind } from "typescript"
import { connection } from "./connection"

// Criar Usuário 
export const createUser = async (
    name: string,
    nickname: string,
    email: string
): Promise<any> => {
    await connection("TodoListUser")
        .insert({
            name: name,
            nickname: nickname,
            email: email
        })
}

// Pegar usuário pelo ID 

export const getUserById = async (id :number) :Promise<any> => {

    const result = await connection("TodoListUser")
    .select('*')
    .where('id', id)

    return result
}

// Editar usuário 

export const editUser = async (id: number, name :string, nickname :string) :Promise<any> => {
    await connection("TodoListUser")
    .update({
        name: name, 
        nickname: nickname
    })
    .where('id', id)
}


