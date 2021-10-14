// Exercícios Aula - Objetos

// Exercícios de interpretação de código

/* 

Exercício número 1

a) Matheus Nachtergaele
Virginia Cavendish
canal: Globo horario: 14

Exercício número 2

a) nome: Juca, idade: 3, raca: SRD
nome: Juba, idade: 3, raca: SRD
nome: Jubo, idade: 3, raca: SRD

b) Faz a cópia do conteúdo do objeto citado depois dos três pontos.
Permitindo a manipulação também dos dados. 

Exercício número 3

a) false
undefined

b) Será impresso dessa forma, undefined, pois a propriedade altura
não foi declarada. 

*/

//Exercício de Escrita de código

// Exercício 1

// a)
// const pessoa = {
//     nome: "Pedro Henrique",
//     apelidos: ["Ph", "Pedrinho", "Pedrão"]
// }

// function apresentar(alguem) {
//   return `Eu sou ${alguem.nome}, mas pode me chamar de: ${alguem.apelidos}`
// }
// console.log(apresentar(pessoa))

// b)

// const outraPessoa = {
//     ...pessoa,
//     apelidos: ["Pedroca", "Peaga", "Camarada"]
// }
// console.log(apresentar(outraPessoa))



// Exercício 2 

// const individuo = {
//     nome: 'Pedro',
//     idade: 23,
//     profissao: 'Historiador'
// }

// const sujeito = {
//     nome: 'Rafael',
//     idade: 22,
//     profissao: 'Programador'
// }

// function informar(caracteristicas) {
//      return [
//         caracteristicas.nome, 
//         caracteristicas.nome.length, 
//         caracteristicas.idade,
//         caracteristicas.profissao,
//         caracteristicas.profissao.length
//     ]
// }
// console.log(informar(individuo))
// console.log(informar(sujeito))

// Exercício 3

// const carrinho = []

// const fruta1 = {
//     nome: "Pêra",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Maçã",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Melão",
//     disponibilidade: true
// }

// function inserir(frutas) {
//     carrinho.push(frutas)
// }

// inserir(fruta1)
// inserir(fruta2)
// inserir(fruta3)

// console.log(carrinho)

// Desafio 1

// function informar(){
//     const infos = {
//     nome: prompt('Qual o seu nome?'),
//     idade: Number(prompt('Qual sua idade?')),
//     profissao: prompt('Qual sua profissao?')
//     }

//     console.log(infos, typeof infos)
// }

// informar()