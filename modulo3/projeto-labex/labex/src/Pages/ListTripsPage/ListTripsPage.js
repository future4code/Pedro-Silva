import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardListTrips from "../../Components/CardListTrips";



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
            console.log(res.data)
        })
        .catch ((err) => {
            console.log(err.response)
        })
    }
    

    const goToApplicationForm = () => {
        history.push('/trips/application')
    }

    const backToHome = () => {
        history.push('/')
    }

    const renderTrips = trips.map((item) => {
        return <CardListTrips key={item.id} trip={item}/>
    })



    return (
        <div>
            <p>listtrips!! </p>
            <button onClick={goToApplicationForm}>Candidate-se!</button>
            <button onClick={backToHome}>Voltar</button>

            {renderTrips}

        </div>
    );
}

export default ListTripsPage;