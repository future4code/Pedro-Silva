// Exercícios da aula de Laços

//Exercícios de leitura de código

/* 
Exercício 1

a) Será impresso 10 no console. 

Exercício 2 

a) 19, 21, 23, 25, 27, 30

b) É suficiente. Poderia ser utilizado o indexOf.

Exercício 3

*
**
***
****

*/

// Exercícios de escrita de código

// Exercício 1 

// const bichosEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))

// if (bichosEstimacao = 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }

// let bichos = []

// for(i = 0; i <bichosEstimacao; i++){
//     bichos.push(prompt("Diga o nome do seu(s) bichinho(s)!"))
// }

// console.log(bichos)

// Exercício 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a)
// function imprimeValores(array){
//     for(i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }
// imprimeValores(arrayOriginal)

//b)
// function imprimeValores(array){
//     for(i = 0; i < array.length; i++){
//         console.log(array[i] / 10)
//     }
// }
// imprimeValores(arrayOriginal)

//c) 

// let novoArray =[]

// function criaArray(array){
//     for(i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0) { 
//             novoArray.push(array[i])  
//         }
//     }
//     console.log(novoArray)
// }

// criaArray(arrayOriginal)

//d) 
// let novoArray = []

// function criaArray(array){
//       for(i = 0; i < array.length; i++){
//         novoArray.push(`O elemento do índice ${i} é ${array[i]}`)
//       }
//       console.log(novoArray)
//     }

// criaArray(arrayOriginal)

//e) 
function imprimeMaiorMenor(array){
    let maior = array[0]
    let menor = array[0]
    for(i = 0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i]
        }
        if (array[i] < menor){
            menor = array[i]
        }
    }
    console.log(`O maior número é ${maior} e menor número é ${menor}`)
}

imprimeMaiorMenor(arrayOriginal)
