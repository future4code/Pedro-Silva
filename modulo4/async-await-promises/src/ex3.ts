import axios from "axios"
import { baseURL } from "./baseURL"
// Exercicio 3

type User = {
	id: string;
	name: string;
	email: string;
}

// a) Nenhum erro. 

// b) Para deixar a resposta da requisição mais organizada.

// c) 

export const getAllSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((item:any) => {
        return {
            id: item.id,
            name: item.name,
            email: item.email
        }
    })
}