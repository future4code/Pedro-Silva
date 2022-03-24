import { off } from "process"
import { CustomError } from "../error/CustomError"
import { pokeList } from "../model/pokemons"
import { PokemonRepository } from "./PokemonRepository"

export class PokemonBusiness {
    private pokeData: PokemonRepository
    constructor(pokeDataImplementation: PokemonRepository) {
        this.pokeData = pokeDataImplementation
    }

    getPokemons = async(order: string, page: number, size: number ) :Promise<pokeList[]> => {

        const offset = size * (page - 1)

        const result = this.pokeData.getPokemons(offset, order, size)

        return result
    }
}