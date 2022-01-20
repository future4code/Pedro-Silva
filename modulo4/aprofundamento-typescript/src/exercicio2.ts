// Exercício 2

// a)
// Entrada é um array de números e a saída é um objeto com números. 

function obterEstatisticas(numeros: number[]) :object{

    const numerosOrdenados :number[] = numeros.sort(
        (a: number, b:number) => a - b
    )

    let soma :number = 0

    for (let num of numeros) {
        soma += num
    }

    type TipoEstatisticas ={
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas :TipoEstatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// console.log(obterEstatisticas([7, 4, 10, 5, 3, 6]))

// b) 
// A variável de números ordenados e a variável que é um objeto a ser retornado na função. 

//c)

type Amostra = {
    numeros: number[],

    obterEstatisticas(numeros :number[]):void
}

const amostraDeIdades :Amostra = {
    numeros: [31, 28, 18, 19, 45, 23],

    obterEstatisticas: (numeros) => {}
}

// console.log(amostraDeIdades)

