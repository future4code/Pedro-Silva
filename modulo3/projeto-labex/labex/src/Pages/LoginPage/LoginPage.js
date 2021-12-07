import { useHistory } from "react-router-dom";


function LoginPage() {

    const history = useHistory()

    const goToAdminHomePage = () => {
        history.push('/admin/trips/list')
    }

    const backToHome = () => {
        history.push('/')

    }
    return (
        <div>
            <p>Loginpage!!!</p>
            <input></input>
            <input></input>

            <button onClick={goToAdminHomePage}>Teste: "Logar" </button>
            <button onClick={backToHome}>Voltar a Home</button>

        </div>
    );
}

export default LoginPage;