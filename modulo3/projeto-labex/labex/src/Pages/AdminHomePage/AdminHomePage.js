import axios from "axios";
import { useHistory } from "react-router-dom";
import CardListAdm from "../../Components/CardListAdm";
import { urlLink } from "../../constants/url";
import useGetTrips from "../../Hooks/useGetTrips";
import useProtectPage from "../../Hooks/useProtectPage";
import { useEffect} from "react";
import { useState } from "react";
import { CardContainer, DivPointer } from "./styles";


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
            console.log(res.data)
        })
        .catch ((err) => {
            console.log(err.response)
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
            console.log(err.response)
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



    // const tripListAdm = trips.map((item) => {
    //     return (
    //     <DivPointer onClick={() => {history.push(`/admin/trips/${item.id}`)}}>
    //     <CardListAdm  
    //     key={item.id} 
    //     trip={item}
    //     deleteTrip={() => deleteTrips(item.id)}
    //     />
    //     </DivPointer>
    //     )
    // })

    const tripListAdm = trips.map ((item) => {
        return <CardContainer  
        key={item.id}
        >
        <p onClick={() => {history.push(`/admin/trips/${item.id}`)}}><b>{item.name}</b></p>
        <button onClick={() => deleteTrips(item.id)}>Delete</button>
        </CardContainer>
    })




    return (
        <div>
            <p>ADMHomePage</p>
            <hr/>
            <button onClick={goToCreateTripPage}> Criar Viagem </button>
            <hr/>
            <button onClick={backToHome}>Voltar home</button>
            <hr/>
            <button onClick={logout}> Logout </button>
            <p> Listas de Viagens </p>
            {tripListAdm}

        </div>
    );
}

export default AdminHomePage;