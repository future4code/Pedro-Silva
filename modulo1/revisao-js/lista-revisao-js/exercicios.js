// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function compararNumeros(a, b) {
      if (a < b) {
          return -1
      } else if (a > b) {
          return 1
      } else {
          return 0
      }   
  }
  return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((item) => {
        return item % 2 === 0
    })
    return pares
   }
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []
    for(let pares of array) {
        if(pares % 2 === 0){
            arrayPares.push(pares ** 2)
        }
    }
    return arrayPares
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i=0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i]
        }
    }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2) {
        maior = num1
        menor = num2
    } else if (num2 > num1){
        maior = num2
        menor = num1 
    }

    let objeto = {maiorNumero: maior, 
        maiorDivisivelPorMenor: maior % menor === 0, 
        diferenca: diferenca2}

  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}