import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostDatabase } from "../data/PostDatabase"
import { PostInputDTO } from "../model/Post"

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
            res.status(201).send({ result: postById })

        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro na requisição")
        }

    }
}