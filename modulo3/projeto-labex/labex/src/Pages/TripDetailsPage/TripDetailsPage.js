import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlLink } from "../../constants/url";
import useProtectPage from "../../Hooks/useProtectPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import { CardCandidate, ContainerDetails, DivBodyDetails, DivCandidates } from "./styles";
import Header from "../../Components/Header";


function TripDetailsPage() {
    useProtectPage()

    const [tripDet, setTripDet] = useState({})
    const history = useHistory()
    const params = useParams()

    const backToHome = () => {
        history.push('/')
    }

    const backToLastPage = () => {
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
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    const decideCandidate = (id, choose) => {
        const body = {
            approve: choose
        }
        axios.put(`${urlLink}/trips/${params.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                getDetailsTrip()
                if (choose === true) {
                    alert('Aprovação do candidato realizada.')
                } else {
                    alert('Candidato Reprovado')
                }
            })
            .catch((err) => {
                alert(`${err.message}`)
            })
    }



    const candidatesList = tripDet.candidates && tripDet.candidates.map((item) => {
        return (
            <CardCandidate>
                <p>Nome: {item.name}</p>
                <p>Idade: {item.age}</p>
                <p> Profissão: {item.profession}</p>
                <p> País: {item.country}</p>
                <p>Texto de candidatura: {item.applicationText}</p>
                <button onClick={() => decideCandidate(item.id, true)}>Aprovar</button>
                <button onClick={() => decideCandidate(item.id, false)}> Reprovar</button>
            </CardCandidate>
        )
    })

    const aprooveCandidates = tripDet.approved && tripDet.approved.map((item) => {
        return (
            <li key={item.id}>{item.name}</li>
        )
    })

    return (
        <DivBodyDetails>
            <Header
                back={backToLastPage}
                home={backToHome} />

            <ContainerDetails>

                <h3>Detalhes da Viagem:</h3>

                <div>
                    <div>
                        <h4>{tripDet.name}</h4>
                        <p><b>Descrição:</b> {tripDet.description}</p>
                        <p><b>Planeta:</b> {tripDet.planet}</p>
                        <p><b>Data:</b> {moment(tripDet.date).format('DD/MM/YYYY')}</p>
                        <p><b>Duração:</b> {tripDet.durationInDays}</p>
                    </div>

                    <DivCandidates> 
                        <h3>Candidatos Pendentes</h3>
                        {candidatesList}

                        <h3>Candidatos Aprovados</h3>
                        {aprooveCandidates}
                    </DivCandidates>
                </div>

            </ContainerDetails>
        </DivBodyDetails>
    );
}

export default TripDetailsPage;