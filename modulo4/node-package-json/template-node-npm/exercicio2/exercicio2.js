// Exercício 2

const realizeMathOperation = (operation, n1, n2) => {

   if (operation.toLowerCase() === 'add') {
      console.log('Resposta:', n1 + n2)

   } else if (operation.toLowerCase() === 'sub'){
      console.log('Resposta:', n1 - n2)

   } else if (operation.toLowerCase() === 'mult'){
      console.log('Resposta:', n1 * n2)

   } else if (operation.toLowerCase() === 'div'){
      console.log('Resposta:', n1 / n2)
   }
}

const operation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])

realizeMathOperation(operation, firstNumber, secondNumber)