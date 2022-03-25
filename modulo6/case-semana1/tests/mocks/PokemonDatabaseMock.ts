import { pokeInfos, pokeList } from "../../src/model/pokemons"
import { pokeInfoMock, pokeInfoTypeMock, pokeListMock } from "./modelMocks"

export class PokemonDatabaseMock {

    getPokemons = async (offset: number, order: string, size: number): Promise<pokeList[]> => {
        return pokeListMock
    }

    getPokemonByName = async (name: string): Promise<pokeInfos> => {
        return pokeInfoMock

    }

    getPokemonsByType = async (type: string, offset: number, size: number): Promise<pokeInfos[]> => {
        return pokeInfoTypeMock

    }
};