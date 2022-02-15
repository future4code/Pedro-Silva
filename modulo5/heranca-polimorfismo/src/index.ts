import { AddressInfo } from "net";
import cors from 'cors'
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    // Exercício 4 e 5
    public introduceYourself(): string {
        return `Olá, sou ${this.name}. bom dia!`
    }
}

// const user1 = new User('01', 'phlabenu@gmail.com', 'Pedro', '123456')

// console.log(user1.getId(), user1.getEmail(), user1.getName())

// Exercício 1 


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

// const cust = new Customer(
//     '02',
//     'sofia@labenu.com',
//     'Sofia',
//     '123456',
//     '1111122224444455'
// )
// Exercício 4 e 5
// console.log(cust.getId(),
//  cust.getEmail(), 
//  cust.getName(), 
//  cust.getCreditCard(), 
//  cust.purchaseTotal,
//  cust.introduceYourself()
// )



// ----------- POLIMORFISMO -------------------

// Exercicio 1


export interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    calculateBill(): number
}

const client: Client = {
    name: 'Jorge',
    registrationNumber: 1,
    consumedEnergy: 50,
    calculateBill: () => {
        return 2
    }
}
console.log(client)
console.log(client.calculateBill())
console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// const place = new Place()




// Exercício 3 

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    public getResidences(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    public getFloors(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep);
    }

    public getMachines(): number {
        return this.machinesQuantity
    }
}

const residence: Residence = new Residence(54, "11111-222");
const commerce: Commerce = new Commerce(10, "33333-444");
const industry: Industry = new Industry(15, "55555-666");

console.log(residence.getCep(),
    commerce.getCep(),
    industry.getCep()
)

// Exercício 4 

class ResidencialClient extends Residence implements Client {
    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public calculateBill = (): number => {
        return this.consumedEnergy * 0, 75
    }

    public getCpf(): string {
        return this.cpf;
    }
}



// Exercício 5 

class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    public getCnpj(): string {
        return this.cnpj
    }
}



// Exercício 6 

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: number,
        cep: string,
        machinesQuantity: number
    ) {
        super(machinesQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }

    public getIndustryNumber(): number {
        return this.industryNumber;
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
