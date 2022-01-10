import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToFeed } from "../routes/cordinator";

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            setIsLoading(false)
            alert('Login realizado!')
            goToFeed(navigate)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        setIsLoading(false)
        alert('Cadastro realizado com sucesso!')
        goToFeed(navigate)
        setRightButtonText('Logout')
    })
    .catch((err) => {
        setIsLoading(false)
        alert(`${err.response.data.message} sua senha deve ter no mínimo 8 caracteres!`)
    })
}

