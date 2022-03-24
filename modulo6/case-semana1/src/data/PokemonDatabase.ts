import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError"
import { PokemonRepository } from "../business/PokemonRepository";
import { pokeList } from "../model/pokemons";


export class PokemonDatabase extends BaseDatabase implements PokemonRepository {
    protected TABLE_NAME = 'PokemonGo'

    getPokemons = async (offset: number, order: string, size: number) => {
        try {
            const result : pokeList[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select('pokedex_num', 'generation', 'name')
                .limit(size)
                .offset(offset)
                .orderBy('pokedex_num', order)

                return result
        } catch(error:any) {
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }

}