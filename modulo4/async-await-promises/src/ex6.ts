import axios from "axios"
import { baseURL } from "./baseURL" 
import { getAllSubscribers } from "./ex3"

// Exercício 6 

// a) Faz diferentes requisições de uma só vez. 

// b) 

// c) 

type User = {
	id: string;
	name: string;
	email: string;
}

const sendNotifications = async (
    users: User[], 
    message: string ): Promise<void> => {
        try{
            const requests = users.map((u) => {
                return axios.post(`${baseURL}/notifications`, {
                    subscriberId: u.id,
                    message: message,
                  })
            })
            await Promise.all(requests)

        } catch {
            console.log('Error')
        }
}

const main = async () :Promise<void> => {
    try {
        const users = await getAllSubscribers()
        await sendNotifications(users, 'Você ganhou um boné')

    } catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}
main()