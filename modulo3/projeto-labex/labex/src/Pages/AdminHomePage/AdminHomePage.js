import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlLink } from "../../constants/url";
import useProtectPage from "../../Hooks/useProtectPage";
import { useEffect } from "react";
import { useState } from "react";
import { ButtonsAdm, CardContainer, ContainerAdmHome, DivButtons } from "./styles";
import Header from "../../Components/Header";


function AdminHomePage() {
    useProtectPage()
    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [history])

    const getTrips = () => {
        axios.get(`${urlLink}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                alert(`Erro:${err}`)
            })
    }

    const deleteTrips = (id) => {
        axios.delete(`${urlLink}/trips/${id}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                alert('Viagem Deletada!')
                getTrips()
            })
            .catch((err) => {
                alert(`Erro! ${err.response} Tente novamente!`)
            })

    }

    const goToCreateTripPage = () => {
        history.push('/admin/trips/create')
    }

    const backToHome = () => {
        history.push('/')
    }

    const logout = () => {
        localStorage.clear()
        history.push('/')
    }

    const tripListAdm = trips.map((item) => {
        return <CardContainer
            key={item.id}
        >
            <p><b>{item.name}</b></p>
            <button onClick={() => { history.push(`/admin/trips/${item.id}`) }}> Ver Detalhes</button>
            <button onClick={() => deleteTrips(item.id)}>Delete</button>

        </CardContainer>
    })

    return (
        <div>
            <Header
                back={backToHome}
                home={backToHome} />

            <ContainerAdmHome>

                <h2>Espaço do Administrador</h2>

                <DivButtons>
                    <ButtonsAdm onClick={goToCreateTripPage}> Criar Viagem </ButtonsAdm>

                    <ButtonsAdm onClick={logout}> Logout </ButtonsAdm>
                </DivButtons>

                <h3> Listas de Viagens </h3>
                {tripListAdm}

            </ContainerAdmHome>

        </div>
    );
}

export default AdminHomePage;