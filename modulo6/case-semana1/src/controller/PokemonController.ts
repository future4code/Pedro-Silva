import { Request, Response } from "express"
import { send } from "process"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { PokemonDatabase } from "../data/PokemonDatabase"

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
            const result = await this.pokeBusiness.getPokemons(order, page, size)

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }

        }

    }


}