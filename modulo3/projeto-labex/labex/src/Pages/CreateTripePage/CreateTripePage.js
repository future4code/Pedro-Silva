import { useHistory } from "react-router-dom";
import useProtectPage from "../../Hooks/useProtectPage";



function CreateTripePage() {
    useProtectPage()
    const history = useHistory()

    const backToAdminHome = () => {
        history.goBack()
    }


    return (
        <div>
            <p> Createtrip! </p>

            <button onClick={backToAdminHome}>Voltar</button>

            <div>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            </div>

            <button>Enviar</button>


        </div>
    );
}

export default CreateTripePage;