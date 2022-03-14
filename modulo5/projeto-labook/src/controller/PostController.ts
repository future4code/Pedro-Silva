import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostDatabase } from "../data/PostDatabase"
import { PostInputDTO, POST_TYPES } from "../model/Post"

export class PostController {
    private postBusiness: PostBusiness
    constructor() {
        this.postBusiness = new PostBusiness(new PostDatabase())
    }

    createPost = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const { photo, description, type } = req.body

        const input: PostInputDTO = {
            photo,
            description,
            type
        }
        try {
            const post = await this.postBusiness.createPost(input, token)

            res.status(201).send({ message: 'Post criado com sucesso', post })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro ao criar post")
        }
    }

    getPostById = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const id = req.params.id

        try {
            const postById = await this.postBusiness.getPostById(id, token)
            res.status(200).send({ result: postById })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro na requisição")
        }

    }

    getFeed = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const page = Number(req.query.page)

        try {
            const posts = await this.postBusiness.getFeed(token, page)
            res.status(200).send({ result: posts })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro na requisição")
        }

    }

    getFeedByType = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const type = req.query.type as POST_TYPES

        try {
            const postsFiltered = await this.postBusiness.getFeedByType(token, type)
            res.status(200).send({ result: postsFiltered })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro na requisição")
        }
    }

    likeOnPost = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const id = req.params.id

        try {
            await this.postBusiness.like(id, token)

            res.status(200).send({ message: 'Post curtido!' })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro na requisição")
        }
    }

    dislikeOnPost = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const id = req.params.id

        try {
            await this.postBusiness.dislike(id, token)

            res.status(200).send({ message: 'Post descurtido!' })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro na requisição")
        }
    }

    comment = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const id = req.params.id
        const comment = req.body.comment

        try {
            const result = await this.postBusiness.comment(comment, id, token)

            res.status(200).send({ message: 'Comentário realizado', result })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro na requisição")
        }
    }








}