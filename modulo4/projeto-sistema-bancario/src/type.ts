export type ExtractUser = {
    value: number, 
    date: string,
    description: string
}


export type Accounts = {
    name: string,
    CPF: string,
    birthDate: string,
    balance: number,
    extract: ExtractUser[]
}