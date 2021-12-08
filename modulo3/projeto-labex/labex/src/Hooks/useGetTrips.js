import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"


const useGetTrips = () => {
    const [trips, setTrips] = useState([])
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-silva-carver/trips'

    useEffect(() => {
        getTrips()
    }, [])
    const getTrips = () => {
        axios.get(url)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
            })
    }
    return trips
}

export default useGetTrips