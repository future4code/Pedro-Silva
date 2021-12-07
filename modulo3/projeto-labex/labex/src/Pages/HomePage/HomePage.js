import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory()

    const goToListTrips = () => {
        history.push('/trips/list')
    }

    const goToLogin = () => {
        history.push('/login')
    }


    return (
        <div>
            <p> Olá eu sou a home!</p>

            <button onClick={goToListTrips}>Venha viajar!</button>
            <button onClick={goToLogin}>Login</button>
        </div>
    );
}

export default HomePage;