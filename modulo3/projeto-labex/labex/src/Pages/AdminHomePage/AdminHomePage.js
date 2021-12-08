import { useHistory } from "react-router-dom";
import useProtectPage from "../../Hooks/useProtectPage";


function AdminHomePage() {
    useProtectPage()

    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push('/admin/trips/create')
    }

    const goToDetailspage = () => {
        history.push('/admin/trips/:id')
    }

    const backToHome = () => {
        history.push('/')

    }

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }
    return (
        <div>
            <p>ADMHomePage</p>
            <p> Listas de Viagens </p>

            <button onClick={goToCreateTripPage}> Criar Viagem </button>
            <hr/>
            <button onClick={goToDetailspage}> Detalhes Viagens </button>
            <hr/>
            <button onClick={backToHome}>Voltar home</button>
            <hr/>
            <button onClick={logout}> Logout </button>
        </div>
    );
}

export default AdminHomePage;