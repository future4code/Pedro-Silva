import { CustomError } from "../error/CustomError"
import { PokemonRepository } from "./PokemonRepository"

export class PokemonBusiness {
    private pokeData: PokemonRepository
    constructor(pokeDataImplementation: PokemonRepository) {
        this.pokeData = pokeDataImplementation
    }

    getPokemons = async (order: string, page: number, size: number) => {

        const offset = size * (page - 1)
        const result = this.pokeData.getPokemons(offset, order, size)

        return result
    }

    getLegendaryPokemons = async (page: number, size: number) => {

        const offset = size * (page - 1)
        const result = await this.pokeData.getLegendaryPokemons(offset, size)

        return result
    }

    getPokemonByName = async (name: string) => {
        if (!name) {
            throw new CustomError(422, 'Falta o parâmetro de busca')
        }

        const result = await this.pokeData.getPokemonByName(name)

        if (!result) {
            throw new CustomError(404, 'Não encontrado pokemon com esse nome')
        }

        return result
    }

    getPokemonsByType = async (type: string, page: number, size: number) => {
        if (!type) {
            throw new CustomError(422, 'Falta o parâmetro de busca')
        }

        const offset = size * (page - 1)
        const result = await this.pokeData.getPokemonsByType(type, offset, size)
        if (!result.length) {
            throw new CustomError(404, 'Type inexistente, digite um type válido')
        }

        return result
    }

    getPokemonsByGeneration = async (gen: number, page: number, size: number) => {
        if (gen > 7) {
            throw new CustomError(422, 'Geração inválida, existem apenas 7')
        }

        const offset = size * (page - 1)
        const result = await this.pokeData.getPokemonsByGeneration(gen, offset, size)

        return result
    }

    getPokemonByPokedexNum = async (pokedex_num: number) => {

        const [result] = await this.pokeData.getPokemonByPokedexNum(pokedex_num)
        if (!result) {
            throw new CustomError(404, 'Número da pokedex inválido')
        }

        return result
    }
}