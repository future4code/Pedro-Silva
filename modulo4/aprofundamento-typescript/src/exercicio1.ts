// Exercício 1

// a)

// const minhaString :string = 2
/* Se colocarmos um número a essa variável o código quebra, pois
não é correspondendo à tipagem declarada */

// b) 

// type tipoVariavel = number | string

// const meuNumero :tipoVariavel = '2'

/* Criamos através do Union Type e Type Aliases */

// c) e d) 

type Person = {
    nome: string,
    idade: number,
    corFavorita: string,
}

enum Color {
    RED = 'Vermelho',
    ORANGE ='Laranja',
    YELLOW = 'Amarelo',
    GREEN = 'Verde',
    BLUE = 'Azul', 
    DARKBLUE = 'Anil',
    VIOLET = 'Violeta'
}

const firstPerson: Person = {
    nome: 'Pedro',
    idade: 23,
    corFavorita: Color.RED
}

const secondPerson: Person = {
    nome: 'João',
    idade: 25,
    corFavorita: Color.GREEN
}

const thirdPerson: Person = {
    nome: 'Gabriel',
    idade: 18,
    corFavorita: Color.DARKBLUE
}



