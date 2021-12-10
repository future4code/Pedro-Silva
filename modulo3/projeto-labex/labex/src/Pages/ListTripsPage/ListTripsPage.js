import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardListTrips from "../../Components/CardListTrips";
import Header from "../../Components/Header";



function ListTripsPage() {
    const [trips, setTrips] = useState([])
    const history = useHistory()
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-silva-carver/trips'


    useEffect(() => {
        getTrips()
    }, [history])

    const getTrips = () => {
        axios.get(url)
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch ((err) => {
            alert(`Erro:${err}`)
        })
    }
    

    const goToApplicationForm = () => {
        history.push('/trips/application')
    }

    const backToHome = () => {
        history.push('/')
    }

    const backToLastPage = () => {
        history.goBack()
    }

    const renderTrips = trips.map((item) => {
        return <CardListTrips key={item.id} trip={item}/>
    })



    return (
        <div>
            <Header
            back={backToLastPage}
            home={backToHome}/>

            <p>listtrips!! </p>
            <button onClick={goToApplicationForm}>Candidate-se!</button>

            {renderTrips}

        </div>
    );
}

export default ListTripsPage;