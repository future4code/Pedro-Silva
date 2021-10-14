// Exercícios da Aula de Condicionais

// Exercícios de interpretação de código

/*
Exercício 1

a) O código diz se o número testado tem o resto da divisão 0 quando
é dividido por 2, ou seja, se ele é par. Realiza o teste usando
o operador aritmético "%" para saber se ele é par. 

b) Números pares.

c) Números ímpares.

Exercício 2

a) O código serve para descobrir o preço das frutas. 

b) O preço da fruta é R$2.25

c) O preço da fruta é R$5

Exercício 3

a)  Primeira linha está pedindo um número ao usuário. 

b) Se o usuário digitar 10 a mensagem será 
"Esse número passou no teste". Caso digita -10, não terá mensagem.

c) Haverá erro no console pois a variável mensagem não está sendo
declarada. Isso acontece pois o console.log q imprimiria a mensagem
está em um bloco diferente da variável.

*/

// Exercícios de escrita de código 

// Exercício 1

// const idade = Number(prompt("Digite sua idade?"))

// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// } 

//Exercício 2

// const turno = prompt("Qual seu turno? M, V ou N?")

// if (turno === "M") {
//     console.log("Bom dia!")

// } else if (turno === "V") {
//     console.log("Boa Tarde!")

// } else if (turno === "N") {
//     console.log("Boa Noite!")
// } else {
//     console.log("Insira um turno dentro das opções.")
// }

// Exercício 3

// const turno = prompt("Qual seu turno? M, V ou N?")

// switch (turno) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Inseira um turno dentro das opções.")
//         break      
// }

//Exercício 4

// const escolherFilme = (generoFilme, precoFilme) => {

//     if (generoFilme === "fantasia" && precoFilme < 15) {
//     console.log("Bom filme!")
//     } else { 
//         console.log("Escolha outro filme :(")    
//     }
    
// }

// const genero = prompt("Qual o gênero do filme?").toLowerCase()
// const preco = Number(prompt("Qual o valor do ingresso?"))

// escolherFilme(genero, preco)

// Desafio 1

// const escolherFilme = (generoFilme, precoFilme) => {
//     const lanche = {
//         nome: prompt("Qual lanchinho você vai comprar?")
//     }

//     if (generoFilme === "fantasia" && precoFilme < 15) {
//     console.log("Bom filme!",
//     "Aproveite o seu", lanche.nome)
//     } else { 
//         console.log("Escolha outro filme :(")    
//     }
    
// }

// const genero = prompt("Qual o gênero do filme?").toLowerCase()
// const preco = Number(prompt("Qual o valor do ingresso?"))

// escolherFilme(genero, preco)



