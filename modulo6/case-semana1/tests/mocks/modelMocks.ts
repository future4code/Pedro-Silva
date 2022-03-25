import { pokeInfos, pokeList } from "../../src/model/pokemons";

export const pokeListMock: pokeList[] = [
    {
        pokedex_num: 1,
        generation: 2,
        name: 'pokemon'
    },
    {
        pokedex_num: 3,
        generation: 1,
        name: 'pokemon2'
    },
    {
        pokedex_num: 4,
        generation: 1,
        name: 'pokemon2'
    }
]

export const pokeInfoMock: pokeInfos = {
    pokedex_num: 6,
    name: 'pokemon',
    type_1: 'tipo1',
    type_2: 'tipo2',
    attack: 100,
    defense: 50,
    stamina: 100
}

export const pokeInfoTypeMock: pokeInfos[] = [
    {
        pokedex_num: 6,
        name: 'pokemon',
        type_1: 'type1',
        type_2: 'type2',
        attack: 100,
        defense: 50,
        stamina: 100
    },
    {
        pokedex_num: 7,
        name: 'pokemon2',
        type_1: 'type1',
        type_2: 'type2',
        attack: 100,
        defense: 50,
        stamina: 100
    }
]

