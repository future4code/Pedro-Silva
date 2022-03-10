import { post, PostInputDTO } from "../model/Post"
import Authenticator from "../services/Authenticator"
import IdGenerator from "../services/IdGenerator"
import { PostRepository } from "./PostRepository"

export class PostBusiness {
    private postData: PostRepository
    constructor(postDataImplementation: PostRepository) {
        this.postData = postDataImplementation
    }

    createPost = async (input: PostInputDTO, token: string) => {
        const { photo, description, type } = input
        if (!photo || !description || !type) {
            throw new Error('Ausência de parâmetros. Preencha os devidos campos')
        }

        if (!token) {
            throw new Error('Não autorizado, token ausente.')
        }

        const isToken = Authenticator.getTokenData(token)
        if (!isToken) {
            throw new Error('Token inválido')
        }

        const id = IdGenerator.generateId()
        const date = new Date()

        const newPost: post = {
            id: id,
            photo: photo,
            description: description,
            type: type,
            created_at: date,
            author_id: isToken.id
        }

        const postCreated = await this.postData.insert(newPost)

        return postCreated
    }

    getPostById = async (id: string, token: string) => {
        const isToken = Authenticator.getTokenData(token)
        if (!isToken) {
            throw new Error('Token inválido')
        }

        const result: post | null = await this.postData.getPostById(id)
        if (!result) {
            throw new Error('Post não encontrado')
        }

        return result
    }
}