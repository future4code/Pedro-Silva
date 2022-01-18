// Exercício 1

// a) Utilizando a propriedade process.argv.


// b)

const sendMessage = () => {
   const userName = process.argv[2]
   const age = Number(process.argv[3])
   const msg = `Olá, ${userName}! Você tem ${age} anos.`

   return msg
}

console.log(sendMessage())

// c) 
const sendMessageFuture = () => {
   const userName = process.argv[2]
   const age = Number(process.argv[3])

   const futureAge = age + 7
   const msgFuture = `Olá, ${userName}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`

   return msgFuture
}

console.log(sendMessageFuture())