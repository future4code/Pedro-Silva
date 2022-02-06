import { connect } from "http2"
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

// Criar tarefa 

export const createTask = async (
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: number
): Promise<any> => {
    await connection("TodoListTask")
        .insert({
            title: title,
            description: description,
            limit_date: limit_date,
            creator_user_id: creator_user_id
        })
}

// Pegar Tarefa pelo ID

export const getTaskById = async (id :number) :Promise<any> => {

    const result = await connection("TodoListTask")
    .innerJoin('TodoListUser', "TodoListTask.creator_user_id", 'TodoListUser.id')
    .select('TodoListTask.id', "title", "description", "status", "limit_date", "creator_user_id", "TodoListUser.nickname")
    .where('TodoListTask.id', id)

    return result
}

// Pegar todos os usuários 

export const getUsers = async () :Promise<any> => {
    const result = await connection("TodoListUser")
    .select('id', 'nickname')

    return result
}

// Pegar tarefa pelo Creator UserID

export const getTaskByCreatorId = async (creatorId :number) :Promise<any> => {
    const result = await connection("TodoListTask")
    .innerJoin('TodoListUser', "TodoListTask.creator_user_id", 'TodoListUser.id')
    .select('TodoListTask.id', "title", "description", "status", "limit_date", "creator_user_id", "TodoListUser.nickname")
    .where('TodoListTask.creator_user_id', creatorId)

    return result
}

// Pesquisar Usuário

export const searchUser = async (query :string) :Promise<any> => {
    const result = await connection("TodoListUser")
    .select('id', 'nickname')
    .where('nickname', 'like', `%${query}%`).orWhere('email', 'like', `%${query}%`)

    return result
}

