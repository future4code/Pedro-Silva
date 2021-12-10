import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "../../Components/Header";


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-silva-carver/login'

    const backToHome = () => {
        history.push('/')
    }

    const backToLastPage = () => {
        history.goBack()
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitLogin = (e) => {
        e.preventDefault()

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
            })
    }




    return (
        <div>
            <Header
            back={backToHome}
            home={backToHome}/>

            <p>Loginpage!!!</p>
            <form onSubmit={submitLogin}>
                <input
                    placeholder='E-mail'
                    type='email'
                    value={email}
                    onChange={onChangeEmail}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title={"Insira um e-mail válido."}
                />

                <input
                    placeholder='Senha'
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                    required
                    pattern="^.{3,}"
                    title={'Senha deve possuir no mínimo 3 caracteres.'}
                />
                <hr />
                <button>Logar</button>
            </form>
            <button onClick={backToHome}>Voltar a Home</button>

        </div>
    );
}

export default LoginPage;