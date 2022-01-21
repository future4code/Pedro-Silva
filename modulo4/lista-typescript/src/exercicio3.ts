enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Info = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao: number | null | undefined
}

function infoFilmes(
    nome: string, 
    anoLancamento: number, 
    genero: GENERO, 
    pontuacao?: number) :Info{

    const infos: Info = {
        nome: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao: pontuacao
    }

    return infos
}

console.log(infoFilmes("Mulan", 2009, GENERO.COMEDIA))