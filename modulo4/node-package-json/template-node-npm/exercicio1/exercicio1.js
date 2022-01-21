// Exercício 1

// a) Utilizando a propriedade process.argv.


// b)

const sendMessage = () => {
   const userName = process.argv[2]
   const age = Number(process.argv[3])
   const msg = `Olá, ${userName}! Você tem ${age} anos.`

   if (userName && age) {
      console.log('\033[34m' + msg)
   } else {
      console.log('\033[34m Esperava dois parâmetros só recebi um!')
   }   
}

sendMessage()


// c) 
const sendMessageFuture = () => {
   const userName = process.argv[2]
   const age = Number(process.argv[3])
   const futureAge = age + 7
   const msgFuture = `Olá, ${userName}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`

   if (userName && age) {
      console.log('\033[34m' + msgFuture)
   } else {
      console.log('\033[34m Esperava dois parâmetros só recebi um!')
   }
}

sendMessageFuture()

