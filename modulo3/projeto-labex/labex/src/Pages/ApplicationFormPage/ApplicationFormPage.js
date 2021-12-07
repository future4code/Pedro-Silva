import { useHistory } from "react-router-dom";


function ApplicationFormPage() {

    const history = useHistory()


    const backToList = () => {
        history.push('/trips/list')

    }


    return (
        <div>
            <p>appformpage!!!</p>

            <button onClick={backToList}>Voltar</button>

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

export default ApplicationFormPage;