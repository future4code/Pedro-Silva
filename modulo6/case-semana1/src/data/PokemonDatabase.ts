import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError"
import { PokemonRepository } from "../business/PokemonRepository";
import { pokeByGen, pokeInfos, pokeLegendary, pokeList } from "../model/pokemons";


export class PokemonDatabase extends BaseDatabase implements PokemonRepository {
    protected TABLE_NAME = 'PokemonGo'

    getPokemons = async (offset: number, order: string, size: number) => {
        try {
            const result: pokeList[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select('pokedex_num', 'generation', 'name')
                .limit(size)
                .offset(offset)
                .orderBy('pokedex_num', order)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

    getPokemonByName = async (name: string) => {
        try {
            const result: pokeInfos[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select('pokedex_num', 'name', 'type_1',
                    'type_2', 'attack', 'defense', 'stamina'
                )
                .where('name', 'like', `%${name}%`)

            return result[0]

        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

    getPokemonsByType = async (type: string, offset: number, size: number) => {
        try {
            const result: pokeInfos[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select('pokedex_num', 'name', 'type_1',
                    'type_2', 'attack', 'defense', 'stamina'
                )
                .where('type_1', 'like', `%${type}%`)
                .orWhere('type_2', 'like', `%${type}%`)
                .limit(size)
                .offset(offset)


            return result

        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

    getPokemonsByGeneration = async (generation: number, offset: number, size: number) => {
        try {
            const result: pokeByGen[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select('pokedex_num', 'name', 'generation',
                    'status_total')
                .where({ generation })
                .limit(size)
                .offset(offset)



            return result

        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

    getLegendaryPokemons = async (offset: number, size: number) => {
        try {
            const result: pokeLegendary[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select('pokedex_num', 'name',
                    'attack', 'defense', 'stamina')
                .where('legendary', 1)
                .orWhere('legendary', 2)
                .limit(size)
                .offset(offset)


            return result


        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

    getPokemonByPokedexNum = async (pokedex_num: number) => {
        try {
            const result: pokeInfos[] = await BaseDatabase
                .connection(this.TABLE_NAME)
                .select('pokedex_num', 'name', 'type_1',
                    'type_2', 'attack', 'defense', 'stamina'
                )
                .where({ pokedex_num })


            return result

        } catch (error: any) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }
}