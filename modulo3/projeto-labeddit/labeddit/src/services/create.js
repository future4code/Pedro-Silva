import axios from "axios";
import { BASE_URL } from "../constants/url";

export const createPost = (body, clear) => {

    
    axios.post(`${BASE_URL}/posts`, body, {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res)=> {
        alert('Post feito com sucesso!')
        clear()
    })
    .catch((err)=> {
        console.log(err)
    })
}