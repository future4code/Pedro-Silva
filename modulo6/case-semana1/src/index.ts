import { pokemonRouter } from "./router/router";
import { AddressInfo } from "net";
import cors from 'cors'
import express from "express";

export const app = express();
app.use(express.json());
app.use(cors());

app.use('/pokemons', pokemonRouter)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
