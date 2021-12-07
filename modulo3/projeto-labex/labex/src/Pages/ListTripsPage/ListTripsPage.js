import { useHistory } from "react-router-dom";



function ListTripsPage() {
    const history = useHistory()

    const goToApplicationForm = () => {
        history.push('/trips/application')
    }

    const backToHome = () => {
        history.push('/')

    }



    return (
        <div>
            <p>listtrips!! </p>
            <button onClick={goToApplicationForm}>Candidate-se!</button>
            <button onClick={backToHome}>Voltar</button>

        </div>
    );
}

export default ListTripsPage;