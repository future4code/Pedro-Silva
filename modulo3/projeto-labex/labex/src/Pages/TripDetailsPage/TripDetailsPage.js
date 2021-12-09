import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlLink } from "../../constants/url";
import useProtectPage from "../../Hooks/useProtectPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function TripDetailsPage() {
    useProtectPage()

    const [tripDet, setTripDet] = useState({})
    const history = useHistory()
    const params = useParams()

    const backToAdminHome = () => {
        history.goBack()
    }

    useEffect(() => {
        getDetailsTrip()
    }, [])

    const getDetailsTrip = () => {
        axios.get(`${urlLink}/trip/${params.id}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setTripDet(res.data.trip)
            console.log(tripDet)
        })
        .catch((err) => {
            alert(err.response)
        })
    }

    const candidatos = tripDet.candidates && tripDet.candidates.map((item) => {
        return (
            <div>
                <p>Nome: {item.name}</p>
                <p>Idade: {item.age}</p>
                <p> Profissão: {item.profession}</p>
                <p> País: {item.country}</p>
                <p>Texto de candidatura: {item.applicationText}</p>
            </div>
        )
    })



    return (
        <div>
            <p>trip details page!! </p>

            <button onClick={backToAdminHome}>Voltar</button>

            <hr/>
            <div>
                <h3>Detalhes da Viagem:</h3>
                <h4>{tripDet.name}</h4>
                <p><b>Descrição:</b> {tripDet.description}</p>
                <p><b>Planeta:</b> {tripDet.planet}</p>
                <p><b>Data:</b>{tripDet.date}</p>
                <p><b>Duração:</b> {tripDet.durationInDays}</p>

                <hr/>
                
                <h3>Candidatos</h3>
                {candidatos}
            </div>
        </div>
    );
}

export default TripDetailsPage;