type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}[]

const clientes: Cliente = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function retornaCliente(array: Cliente) {
    const filtrando = array.filter((c) => {
        const debitosValores = c.debitos.reduce((acc, valor) => { return acc + valor }, 0)
        const saldo = c.saldoTotal - debitosValores
        return saldo < 0
    })

    const clientesNegativos = filtrando.map((c) => {
        const debitosValores = c.debitos.reduce((acc, valor) => { return acc + valor }, 0)
        c.saldoTotal = c.saldoTotal - debitosValores
        c.debitos = []

        return c
    })

    return clientesNegativos
}

console.log(retornaCliente(clientes))

