```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contador = 0
  if(arrayDeNumeros.includes(numeroEscolhido)){
    for(let number of arrayDeNumeros){
      if(number === numeroEscolhido){
        contador += 1 
      }
    }
    return `O número ${numeroEscolhido} aparece ${contador}x`
  } else {
    
    return `Número não encontrado`
    
  }
}
```