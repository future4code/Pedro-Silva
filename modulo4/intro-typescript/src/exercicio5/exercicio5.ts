const anoAtual :number = Number(process.argv[2])
const anoNascimento :number = Number(process.argv[3])
const anoEmissao :number = Number(process.argv[4])

function checaRenovacaoRG(anoAtual :number, anoNascimento :number, anoEmissao: number) :boolean {
    const idade :number = anoAtual - anoNascimento
    const tempoCarteira :number = anoAtual - anoEmissao
 
    const cond1 : boolean = idade <= 20 && tempoCarteira >= 5
    const cond2 : boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 : boolean = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao))