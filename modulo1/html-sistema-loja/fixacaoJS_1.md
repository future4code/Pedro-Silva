``` 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salarioFixo = 2000
 if(qtdeCarrosVendidos !== 0 && valorTotalVendas !== 0) {
 let valorCarro = valorTotalVendas / qtdeCarrosVendidos
 let comissao = (100 + valorCarro * 0.05) * qtdeCarrosVendidos
 let salarioFinal = salarioFixo + comissao
 
 return salarioFinal
 
 } else {
   
   return salarioFixo
 }
} 

```