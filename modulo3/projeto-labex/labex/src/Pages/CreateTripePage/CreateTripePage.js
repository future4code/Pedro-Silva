import { useHistory } from "react-router-dom";



function CreateTripePage() {
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