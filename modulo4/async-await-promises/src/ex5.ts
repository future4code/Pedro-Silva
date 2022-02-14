import axios from "axios"
import { baseURL } from "./baseURL" 
import { getAllSubscribers } from "./ex3"

// Exercício 5 

type User = {
	id: string;
	name: string;
	email: string;
}

const sendNotifications = async (
    user: User[], 
    message: string ): Promise<void> => {
        try{
            user.forEach(async (res) => {
                await axios.post(`${baseURL}/notifications`, {
                    subscriberId: res.id,
                    message: message
                })
            })
            
            console.log("Notificações enviadas")

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