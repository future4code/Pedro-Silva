import { validateCharacter } from "../src";

describe("teste de validação de personagem", () => {

    test("Retorna falso para nome vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 4000,
            strength: 400,
            defense: 600,
        })

        expect(result).toBe(false);
    })

    test("Retorna falso para vida igual a zero", () => {
        const result = validateCharacter({
            name: "Silver Surfer",
            life: 0,
            strength: 500,
            defense: 300,
        })

        expect(result).toBe(false);
    })

    test("Retorna falso para força igual a zero", () => {
        const result = validateCharacter({
            name: "Silver Surfer",
            life: 3000,
            strength: 0,
            defense: 500,
        })

        expect(result).toBe(false);
    })

    test("Retorna falso para defesa igual a zero", () => {
        const result = validateCharacter({
            name: "Silver Surfer",
            life: 3000,
            strength: 500,
            defense: 0,
        })

        expect(result).toBe(false);
    })

    test("Retorna falso para defesa menor que zero", () => {
        const result = validateCharacter({
            name: "Silver Surfer",
            life: 3000,
            strength: 600,
            defense: -400,
        })

        expect(result).toBe(false);
    })

    test("Retorna true para valores passados corretamente", () => {
        const result = validateCharacter({
            name: "Silver Surfer",
            life: 5000,
            strength: 600,
            defense: 400,
        })

        expect(result).toBe(true);
    })

    





    



})