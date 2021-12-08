import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-silva-carver/login'

    // const goToAdminHomePage = () => {
    //     history.push('/admin/trips/list')
    // }

    const backToHome = () => {
        history.push('/')
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(url, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert('Usuário logado com sucesso!')
            history.push('/admin/trips/list')
        })
        .catch((err) => {
            alert(`Erro! ${err.response.data.message}! Tente Novamente!`)
            console.log(err.response)
        })
    }


    return (
        <div>
            <p>Loginpage!!!</p>
            <input
            placeholder='E-mail'
            type='email'
            value={email}
            onChange={onChangeEmail}/>

            <input
            placeholder='Senha'
            type='password'
            value={password}
            onChange={onChangePassword}
            />

            <hr/>
            <button onClick={submitLogin}>Logar</button>
            {/* <button onClick={goToAdminHomePage}>Teste: "Logar" </button> */}
            <button onClick={backToHome}>Voltar a Home</button>

        </div>
    );
}

export default LoginPage;