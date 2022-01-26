const aniversario :string = '05/02/1998'
const emissaoCarteira :string = '14/04/2016'

function precisaRenovar(niver:string, emissao:string): boolean{
    const arrayNiver :string[] = niver.split('/')
    const dataNiver :Date = new Date(Number(arrayNiver[2]), Number(arrayNiver[1]) -1, Number(arrayNiver[0]))

    const arrayEmissao :string[] = emissao.split('/')
    const dataEmissao :Date = new Date(Number(arrayEmissao[2]), Number(arrayEmissao[1]) -1, Number(arrayEmissao[0]))

    const dataAtual :Date = new Date()

    const dia: number = 1000 * 60 * 60 * 24 * 365;

    const idade :number = (Number(dataAtual) - Number(dataNiver)) / dia
    const tempoCarteira:number = (Number(dataAtual) - Number(dataEmissao)) / dia

    const cond1 : boolean = idade <= 20 && tempoCarteira >= 5
    const cond2 : boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 : boolean = idade > 50 && tempoCarteira >= 15

    return cond1 || cond2 || cond3

}

console.log(precisaRenovar(aniversario,emissaoCarteira))