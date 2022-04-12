export type pokeList = {
    pokedex_num: number,
    generation: number,
    name: string
}

export type pokeInfos = {
    pokedex_num: number,
    name: string,
    type_1: string,
    type_2?: string,
    attack: number,
    defense: number,
    stamina: number
}

export type pokeByGen = {
    pokedex_num: number,
    name: string,
    generation: number,
    status_total: number
}

export type pokeLegendary = {
    pokedex_num: number,
    name: string,
    attack: number,
    defense: number,
    stamina: number
}