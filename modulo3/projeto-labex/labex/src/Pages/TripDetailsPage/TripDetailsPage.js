import { useHistory } from "react-router-dom";
import useProtectPage from "../../Hooks/useProtectPage";

function TripDetailsPage() {
    useProtectPage()

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