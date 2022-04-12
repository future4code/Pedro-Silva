import { PokemonBusiness } from "../src/business/PokemonBusiness";
import { pokeInfoMock, pokeInfoTypeMock, pokeListMock } from "./mocks/modelMocks";
import { PokemonDatabaseMock } from "./mocks/PokemonDatabaseMock";


const pokeBusiness = new PokemonBusiness(
    new PokemonDatabaseMock as any
)

describe("Teste pegar pokemons ordenados", () => {
    test("Sucesso", async () => {
        expect.assertions(1)

        const result = await pokeBusiness.getPokemons(
            "DESC",
            1,
            5
        )

        expect(result).toEqual(pokeListMock);
    })
})

describe("Teste pegar pokemons por nome", () => {
    test("Sucesso", async () => {
        expect.assertions(1)

        const result = await pokeBusiness.getPokemonByName('pokemon')

        expect(result).toEqual(pokeInfoMock)
    })
})

describe("Teste pegar pokemons por type", () => {
    test("Sucesso", async () => {
        expect.assertions(1)

        const result = await pokeBusiness.getPokemonsByType('type1', 1, 5)

        expect(result).toEqual(pokeInfoTypeMock)
    })

    test("Erro ao buscar type", async () => {
        expect.assertions(2)
        try {
            await pokeBusiness.getPokemonsByType('', 1, 5)

        } catch (error: any) {
            expect(error.message).toEqual('Falta o parâmetro de busca')
            expect(error.code).toBe(422)
        }
    })
})

