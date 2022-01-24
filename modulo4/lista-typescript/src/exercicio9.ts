function quantificarAnagramas(palavra:string) {
    let letras:number = palavra.length
    for(let i = palavra.length; i > 1; i--){
        letras = letras * (i - 1)
    }

    return letras
}

console.log(quantificarAnagramas('caio'))

