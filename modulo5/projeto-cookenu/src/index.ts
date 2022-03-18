import { AddressInfo } from "net";
import cors from 'cors'
import express from "express";
import { signUp } from "./endpoints/signUp";
import { login } from "./endpoints/login";
import { getUserProfile } from "./endpoints/getUserProfile";
import { getUserById } from "./endpoints/getUserById";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipeById } from "./endpoints/getRecipeById";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/user/profile', getUserProfile)
app.get('/user/:id', getUserById)
app.get('/recipe/:id', getRecipeById)

app.post('/signup', signUp)
app.post('/login', login)
app.post('/recipe', createRecipe)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
