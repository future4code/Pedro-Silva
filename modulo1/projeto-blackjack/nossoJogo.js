/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack")

if(confirm("Quer iniciar uma nova rodada?")) {
   const cartaUsuario = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaPc = comprarCarta()
   const cartaPc2 = comprarCarta()

   const pontuacaoUsuario = cartaUsuario.valor + cartaUsuario2.valor
   const pontuacaoPc = cartaPc.valor + cartaPc2.valor

   console.log(`Usuário - cartas: ${cartaUsuario.texto, cartaUsuario2.texto} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${cartaPc.texto, cartaPc2.texto} - pontuação ${pontuacaoPc}`)
   if(pontuacaoUsuario > pontuacaoPc) {
      console.log('O usuário ganhou!')

   } else if(pontuacaoPc > pontuacaoUsuario) {
      console.log( 'O computador ganhou!')

   } else if (pontuacaoPc === pontuacaoUsuario) {
      console.log('Empate')
   }

} else {
   console.log("O jogo acabou");
}