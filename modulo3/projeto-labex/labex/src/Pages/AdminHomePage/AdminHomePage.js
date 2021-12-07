import { useHistory } from "react-router-dom";


function AdminHomePage() {

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
    return (
        <div>
            <p>ADMHomePage</p>
            <p> Listas de Viagens </p>

            <button onClick={goToCreateTripPage}> Criar Viagem </button>
            <button onClick={goToDetailspage}> Detalhes Viagens </button>
            <button onClick={backToHome}>Teste: Voltar home</button>
        </div>
    );
}

export default AdminHomePage;