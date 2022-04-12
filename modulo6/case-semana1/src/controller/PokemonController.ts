import { Request, Response } from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { PokemonDatabase } from "../data/PokemonDatabase"
import { CustomError } from "../error/CustomError"

export class PokemonController {
    private pokeBusiness: PokemonBusiness
    constructor() {
        this.pokeBusiness = new PokemonBusiness(new PokemonDatabase())
    }

    getPokemons = async (req: Request, res: Response) => {
        const order = req.query.order === "DESC" ? "DESC" : "ASC"
        const page = Number(req.query.page) || 1
        const size = Number(req.query.size) || 20

        try {
            const result = await this.pokeBusiness
                .getPokemons(order, page, size)

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.code).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }
        }
    }

    getLegendaryPokemons = async (req: Request, res: Response) => {
        const page = Number(req.query.page) || 1
        const size = Number(req.query.size) || 10
        try {
            const result = await this.pokeBusiness
                .getLegendaryPokemons(page, size)

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.code).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }
        }
    }

    getPokemonByName = async (req: Request, res: Response) => {
        const name = req.query.name as string

        try {
            const result = await this.pokeBusiness
                .getPokemonByName(name)

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.code).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }
        }
    }

    getPokemonsByType = async (req: Request, res: Response) => {
        const type = req.query.type as string
        const page = Number(req.query.page) || 1
        const size = Number(req.query.size) || 10

        try {
            const result = await this.pokeBusiness
                .getPokemonsByType(type, page, size)

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.code).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }
        }
    }

    getPokemonsByGeneration = async (req: Request, res: Response) => {
        const generation = Number(req.params.gen)
        const page = Number(req.query.page) || 1
        const size = Number(req.query.size) || 10

        try {
            const result = await this.pokeBusiness
                .getPokemonsByGeneration(generation, page, size)

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.code).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }
        }
    }

    getPokemonByPokedexNum = async (req: Request, res: Response) => {
        const pokedex_num = Number(req.params.pokedexNumber)

        try {
            const result = await this.pokeBusiness
                .getPokemonByPokedexNum(pokedex_num)

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof CustomError) {
                res.status(error.code).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }
        }
    }






}