import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 2

// a) A ordem do termo async na função vai antes do 'function'
// enquanto na arrow function vai antes dos parâmetros



// b) 
const getAllSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
} 