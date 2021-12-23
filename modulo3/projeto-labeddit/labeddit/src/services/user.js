import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToFeed } from "../routes/cordinator";

export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert('Login realizado!')
            clear()
            goToFeed(navigate)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert('Cadastro realizado com sucesso. Faça login!')
        clear()
        goToFeed(navigate)
        setRightButtonText('Logout')
    })
    .catch((err) => {
        alert(`${err.response.data.message} sua senha deve ter no mínimo 8 caracteres!`)
        console.log(err.response)
    })
}

