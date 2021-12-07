import { useHistory } from "react-router-dom";

function TripDetailsPage() {

    const history = useHistory()

    const backToAdminHome = () => {
        history.goBack()
    }

    return (
        <div>
            <p>trip details page!! </p>

            <button onClick={backToAdminHome}>Voltar</button>
        </div>
    );
}

export default TripDetailsPage;