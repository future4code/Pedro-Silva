function retornaFrase(nome: string, data:string) :string {
    let array  :string[] = data.split('/')

    switch (array[1]) {
        case '01': array[1] = "Janeiro"
        break;
        case '02': array[1] = "Fevereiro"
        break;
        case '03': array[1] = "Março"
        break;
        case '04': array[1] = "Abril"
        break;
        case '05': array[1] = "Maio"
        break;
        case '06': array[1] = "Junho"
        break;
        case '07': array[1] = "Julho"
        break;
        case '08': array[1] = "Agosto"
        break;
        case '09': array[1] = "Setembro"
        break;
        case '10': array[1] = "Outubro"
        break;
        case '11': array[1] = "Novembro"
        break;
        case '12': array[1] = "Dezembro"
        break;
        default:
    }

    return `Olá me chamo ${nome}, nasci no dia ${array[0]} do mês de ${array[1]} do ano de ${array[2]}`
}


console.log(retornaFrase('Pedro', '05/10/1998'))