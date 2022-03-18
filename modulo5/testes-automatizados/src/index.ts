import { AddressInfo } from "net";
import cors from 'cors'
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());


// Exerícios 

export interface User {
    name: string
    balance: number
}

export const verifyPurchase = (user: User, value: number) => {
    if (user.balance >= value){
        return {...user, balance: user.balance - value}
    }

    return undefined
}


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
