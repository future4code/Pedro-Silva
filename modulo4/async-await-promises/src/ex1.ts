import axios from "axios"
import { baseURL } from "./baseURL"
// Exercício 1 

// a) Endpoint GET. 

// b) Promise<any[]>. 

// c) 

async function getAllSubscribers():Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}

const main = async () :Promise<void> => {
    try {
        const subscribers = await getAllSubscribers()
        console.log(subscribers)

    } catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}

main()