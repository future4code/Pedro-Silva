import { AddressInfo } from "net";
import cors from 'cors'
import express from "express";
import { getUsersByName, getUsersByType } from "./endpoints/endpointEx1";
import { getOrderedUsers } from "./endpoints/endpointEx2";
import { getUserByPage } from "./endpoints/endpointEx3";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/user', getUsersByName)
app.get('/user/order', getOrderedUsers)
app.get('/user/page', getUserByPage)
app.get('/user/:type', getUsersByType)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;
