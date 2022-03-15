import { User, verifyPurchase } from "../src"

describe('Testes de aula', () => {

    
    test('Teste saldo maior que compra', () => {
        const user: User = {
            name: 'Pedro',
            balance: 100
        }

        const result = verifyPurchase(user, 30)

        expect(result).toEqual({name: 'Pedro', balance: 70})
    })

    test('Teste saldo igual à compra', () => {
        const user: User = {
            name: 'Junior',
            balance: 100
        }

        const result = verifyPurchase(user, 100)

        expect(result).toEqual({name: 'Junior', balance: 0})
    })

    test('Teste saldo menor que a compra', () => {
        const user: User = {
            name: 'Igor',
            balance: 100
        }

        const result = verifyPurchase(user, 300)

        expect(result).not.toBeDefined()
    })
})