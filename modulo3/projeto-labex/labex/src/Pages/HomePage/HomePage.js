import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory()

    const goToListTrips = () => {
        history.push('/trips/list')
    }

    const goToAdmAreaOrLogin = () => {
        history.push('/admin/trips/list')
    }


    return (
        <div>
            <p> Olá eu sou a home!</p>

            <button onClick={goToListTrips}>Venha viajar!</button>
            <button onClick={goToAdmAreaOrLogin}>Área do Administrador</button>
        </div>
    );
}

export default HomePage;