// Exercícios da aula de funções

/* Exercícios de interpretação de código

Exercício 1

a) 10
50

b) Se retirasse nada seria impresso no console, a não ser que o console.log
estivesse dentro da função. Não aparecerá nada.

Exercício 2

A) Essa função descobre se tem a palavra cenoura centro da frase inserida 
pelo usuário, aplicando true ou false.

B) i. True
ii. true
iii. true

*/

// Exercício de escrita de código

// Exercício 1
// a)
// function imprimirInfos() {
//     console.log("Eu sou Pedro, tenho 23 anos, moro no Rio de Janeiro e sou estudante.")

// }
// imprimirInfos()

// b)

// function informarPessoa() {
//     const nome = prompt("Digite seu nome:")
//     const idade = Number(prompt("Digite sua idade:"))
//     const cidade = prompt("Digite sua cidade:")
//     const trabalho = prompt("Digite sua profissão:")
//     const infoCompleta =(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${trabalho}.`)

//     console.log(infoCompleta)
// }

// informarPessoa()

// Exercício 2
// a)
// function somarNumeros() {
//     const numeroUm = Number(prompt("Digite um número:"))
//     const numeroDois = Number(prompt("Digite outro número"))
//     const soma = numeroUm + numeroDois
//     console.log(soma)
//     return soma
// }

// somarNumeros()

// b)
// function descobrirMaiorOuIgual() {
//     const numeroUm = Number(prompt("Digite um número:"))
//     const numeroDois = Number(prompt("Digite outro número"))
//     const resultado = numeroUm >= numeroDois
//     console.log(resultado)
//     return resultado
// }

// descobrirMaiorOuIgual()

// c) 

// function saberPar() {
//     const numero = Number(prompt("Digite um número:"))
//     const restoDaDivisão = numero % 2
//     const resultado = restoDaDivisão === 0
//     console.log(resultado)
//     return resultado
// }

// saberPar()

// d)
// function imprimirMensagem(){
// const mensagem = prompt("Insira uma mensagem:")
// const fraseMaiuscula = mensagem.toUpperCase()
// console.log(mensagem.length)
// console.log(fraseMaiuscula)
// }

// imprimirMensagem()

// Exercício 3
// function somar(numeroA, numeroB){
// const soma = numeroA + numeroB
// return soma
// }

// function subtrair(numeroC, numeroD) {
//     const subtracao = numeroC - numeroD
//     return subtracao
// }

// function multiplicar(numeroE, numeroF){
//     const multiplicacao = numeroE * numeroF
//     return multiplicacao
// }

// function dividir(numeroG, numeroH){
//     const divisao = numeroG / numeroH
//     return divisao
// }

// const numeroUmUsuario = Number(prompt("Digite um número:"))
// const numeroDoisUsuario = Number(prompt("Digite outro número"))

// const resultado1 = somar(numeroUmUsuario, numeroDoisUsuario)
// const resultado2 = subtrair(numeroUmUsuario, numeroDoisUsuario)
// const resultado3 = multiplicar(numeroUmUsuario, numeroDoisUsuario)
// const resultado4 = dividir(numeroUmUsuario, numeroDoisUsuario)

// console.log(`Numeros Inseridos: ${numeroUmUsuario} e ${numeroDoisUsuario}
// Soma: ${resultado1}
// Diferença: ${resultado2}
// Multiplicação: ${resultado3}
// Divisão: ${resultado4}`)



// Desafio
// Exercício 1.
// const imprimirNoConsole = (parametro) => { 
//     console.log(parametro)
// }

// const somaValores = (numeroUm, numeroDois) => {
// const soma = numeroUm + numeroDois
// imprimirNoConsole(soma)
// }

// const numeroUmUsuario = Number(prompt("Digite um número:"))
// const numeroDoisUsuario = Number(prompt("Digite outro número:"))

// somaValores(numeroUmUsuario, numeroDoisUsuario)

//Exercício 2.

// function teoremaPitagoras(x, y) {
//     const hipotenusa = (x*x) + (y*y)
//     const resultado = hipotenusa**(1/2)
//     return resultado
// }

// const cat1 = Number(prompt("Diga um cateto:"))
// const cat2 = Number(prompt("Digite o outro cateto"))

// const resultadoPitagoras = teoremaPitagoras(cat1, cat2)
// console.log(resultadoPitagoras)
