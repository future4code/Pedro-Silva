// Exercício 2

const realizeMathOperation = (operation, n1, n2) => {

   if (operation.toLowerCase() === 'add') {
      console.log('\033[34m Resposta:', n1 + n2)

   } else if (operation.toLowerCase() === 'sub'){
      console.log(' \033[34m Resposta:', n1 - n2)

   } else if (operation.toLowerCase() === 'mult'){
      console.log('\033[34m Resposta:', n1 * n2)

   } else if (operation.toLowerCase() === 'div'){
      console.log('\033[34m Resposta:', n1 / n2)
   }
}

const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

if (operation && firstNumber && secondNumber) {
realizeMathOperation(operation, firstNumber, secondNumber)
} else {
   console.log('\033[34m Estão faltando parâmetros a serem enviados!')
}