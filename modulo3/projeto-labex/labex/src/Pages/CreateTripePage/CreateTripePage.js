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
            <form>
            <input/>
            <input/>
            <input/>
            <input/>
            </form>
            </div>

            <button>Enviar</button>


        </div>
    );
}

export default CreateTripePage;