import { pokeList } from "../model/pokemons";

export interface PokemonRepository {
    getPokemons(offset: number, order: string, size: number):Promise<pokeList[]>
}