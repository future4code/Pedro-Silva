import { AddressInfo } from "net";
import cors from 'cors'
import express from "express";
import { transaction } from "./types/types";

const app = express();
app.use(express.json());
app.use(cors());


// Exercício 1 

//a) O construtor é onde se encontram as ações que podem ser 
// executadas, referentes à classe. 


//b) 

// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];

//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
// }
// const user = new UserAccount('111-111-111.11', 'Pedro Henrique', 24)

// Uma só. 

// c) Através do this e também através de métodos como getters e setters. 

// Exercício 2 

class Transaction {
    private date: string
    private value: number
    private description: string

    constructor(date: string, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }

    getDate(): string {
        return this.date
    }

    getValue(): number {
        return this.value
    }

    getDescription(): string {
        return this.description
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    getCpf(): string {
        return this.cpf
    }
    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }
    getBalance(): number {
        return this.balance
    }
    getTransactions(): Transaction[] {
        return this.transactions
    }

    setTransactions(newT:Transaction):void {
        this.transactions.push(newT)
    } 
}
const user = new UserAccount('111-111-111.11', 'Pedro Henrique', 24)

const transactionNew = new Transaction('Transferência', 100,'14/02/2022',)

user.setTransactions(transactionNew)

console.log(user)

// Exercício 3

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    getAccount(): UserAccount[] {
        return this.accounts
    }

    setAccounts(acc:UserAccount):void{
        this.accounts.push(acc)
    }
}



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;




