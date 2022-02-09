import axios from "axios";
import { Address } from "../types/address";

export const getAddress = async (cep: string): Promise<Address | null> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address :Address = {
            cep: cep,
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return address

    } catch (error:any) {
        return null 
    }

}