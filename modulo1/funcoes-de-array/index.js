// Exercícios da aula de Callbacks

// Exercícios de interpretação de código

/*
Exercício 1 

a) {nome: 'Amanda Rangel', apelido: Mandi} 0 Array
{nome: 'Laís Petra', apelido: 'Laura'} 1 Array
{nome: 'Letícia Chijo, apelido: 'Chijo} 2 Array 

Exercício 2

a) {'Amanda Rangel', 'Laís Petra', 'Letícia Chijo'}

Exercício 3

a)  { nome: "Amanda Rangel", apelido: "Mandi" },
{ nome: "Laís Petra", apelido: "Laura" }

*/

// Exercícios de escrita de código

//Exercício 1 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//a)
 
// const pegarNomesPets = (item) =>{
//     return item.nome
// }
// const nomesPets = pets.map(pegarNomesPets)
// console.log(nomesPets)

//b) 

// const destacarSalsichas = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })
// console.log(destacarSalsichas)

//c)

// const enviarMensagens = pets.filter((item) => {
//     if (item.raca === "Poodle") {
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
//     }
// })

// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) 
//  const pegarNomesProdutos =(item) => {
//      return item.nome
//  }
//  const nomesProdutos = produtos.map(pegarNomesProdutos)
//  console.log(nomesProdutos)

 //b)

// const nomesDescontos = produtos.map((item) => {
//     let calculoPreco = item.preco - item.preco * (5 / 100)
//     precoArredondado = calculoPreco.toFixed(2)
//     return {nome: item.nome,
//         preco: precoArredondado
//     }
// })

// console.log(nomesDescontos)


 //c)

// const pegarBebidas = (item) => {
//     return item.categoria === "Bebidas"
// }
 
// const bebidas = produtos.filter(pegarBebidas)
// console.log(bebidas)

//d)

// const pegarYpes = (item) => {
//     return item.nome.includes("Ypê")
// }

// const ypes = produtos.filter(pegarYpes)
// console.log(ypes)

//e) 

// const fraseYpe = produtos.filter((item) =>{
//     if(item.nome.includes("Ypê")) {
//         console.log(`Compre ${item.nome} por R$${item.preco}`)
//     }
// })

//Desafio

// a)

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]
  
// const nomesPokemons = pokemons.map((item) => {
//     return item.nome
// })

// console.log(nomesPokemons.sort())

// //b) 













