import { pokeByGen, pokeInfos, pokeLegendary, pokeList } from "../model/pokemons";

export interface PokemonRepository {
    getPokemons(offset: number, order: string, size: number): Promise<pokeList[]>
    getPokemonByName(name: string): Promise<pokeInfos>
    getPokemonsByType(type: string, offset: number, size: number): Promise<pokeInfos[]>
    getPokemonsByGeneration(generation: number, offset: number, size: number): Promise<pokeByGen[]>
    getLegendaryPokemons(offset: number, size: number): Promise<pokeLegendary[]>
    getPokemonByPokedexNum(pokedex_num: number): Promise<pokeInfos[]>
}