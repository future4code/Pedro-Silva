import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 4 

// a) Promise<void>, pois não dá nenhum retorno. 

// b) 
const createNews = async (
    title: string, content: string,
    date: number): Promise<void> => {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    })
}