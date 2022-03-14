import { comment, dislike, like, post, postfeed, PostInputDTO, POST_TYPES } from "../model/Post"
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
        if (!isToken || isToken === null) {
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

    getFeed = async (token: string, page: number) => {
        const isToken = Authenticator.getTokenData(token)
        if (!isToken) {
            throw new Error('Não autorizado! Token inválido')
        }

        if (!page) {
            page = 1
        }

        const offset = 5 * (page - 1)
        const result: postfeed[] = await this.postData.getFeed(isToken.id, offset)

        return result

    }

    getFeedByType = async (token: string, type: POST_TYPES) => {
        const isToken = Authenticator.getTokenData(token)
        if (!isToken) {
            throw new Error('Não autorizado! Token inválido')
        }

        if (!type) {
            type = POST_TYPES.NORMAL
        }

        if (type !== POST_TYPES.NORMAL && type !== POST_TYPES.EVENT) {
            throw new Error('Escolha um type válido na requisição.')

        }

        const result = await this.postData.getFeedByType(isToken.id, type)

        return result
    }

    like = async (post_id: string, token: string) => {
        const isToken = Authenticator.getTokenData(token)
        if (!isToken) {
            throw new Error('Não autorizado! Token inválido')
        }

        if (!post_id) {
            throw new Error('Informe um id válido do post a ser curtido.')
        }

        const id = IdGenerator.generateId()

        const like: like = {
            id: id,
            postLiked: post_id,
            userLiked: isToken.id
        }

        await this.postData.like(like)
    }

    dislike = async (post_id: string, token: string) => {
        const isToken = Authenticator.getTokenData(token)
        if (!isToken) {
            throw new Error('Não autorizado! Token inválido')
        }

        if (!post_id) {
            throw new Error('Informe um id válido do post a ser curtido.')
        }

        const dislike: dislike = {
            postLiked: post_id,
            userLiked: isToken.id
        }

        await this.postData.dislike(dislike)
    }

    comment = async (comment: string, post_id: string, token: string) => {

        if (!comment) {
            throw new Error('Ausência de parâmetros. Preencha os devidos campos')
        }

        const isToken = Authenticator.getTokenData(token)
        if (!isToken) {
            throw new Error('Não autorizado! Token inválido')
        }

        if (!post_id) {
            throw new Error('Informe um id válido do post a ser curtido.')
        }

        const id = IdGenerator.generateId()
        const commentInsert: comment = {
            id: id,
            post_co: post_id,
            user_co: isToken.id,
            comment: comment
        }

        const result = await this.postData.comment(commentInsert)

        return result
    }




}