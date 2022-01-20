// Exercicio 4

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b)
// Utilizando o scripts no package.json. Assim que rodar o comando no terminal, o código em typescript
// irá para a pasta /build em um arquivo js. através da linha dentro do scripts:
//      "exercicio4": "tsc && node ./build/exercicio4.js",

//b) Não seria diferente.

//c) Utilizando o comando tsc e colocando os arquivos separados

