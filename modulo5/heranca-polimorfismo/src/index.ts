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

const user1 = new User('01', 'phlabenu@gmail.com', 'Pedro', '123456')

// console.log(user1.getId(), user1.getEmail(), user1.getName())

// Exercício 1 

// a) Não, não há um método para retornar o password.
// b) Apenas uma vez.

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

const cust = new Customer(
    '02',
    'sofia@labenu.com',
    'Sofia',
    '123456',
    '1111122224444455'
)
// Exercício 4 e 5
console.log(cust.getId(),
 cust.getEmail(), 
 cust.getName(), 
 cust.getCreditCard(), 
 cust.purchaseTotal,
 cust.introduceYourself()
)

// Exercício 2 
// a) Uma vez. 
// b) Duas vezes, pois duas instâncias foram criadas em relação à classe User.

// Exercício 3 
// a) Não, pois não foi criado um método para retornar o password na class User. 




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
