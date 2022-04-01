import React, { useState, useEffect } from "react";
import GlobalStateContext from "./globalStateContext";
import axios from 'axios'
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/url";

export const GlobalState = (props) => {
    const games = useRequestData([], `${BASE_URL}/loterias`)
    const contest = useRequestData([], `${BASE_URL}/loterias-concursos`)
    const [lotery, setLotery] = useState({id: 0, nome: "mega-sena"})
    const [infoContest, setInfoContest] = useState([])

    useEffect(() => {
        if(games.length){
        setLotery(games[0])
        }
    },[games])

    useEffect(() => {
        contest.filter((c) => {
            if(c.loteriaId === lotery.id){
                getNumberContest(c.concursoId)
                console.log('aaaa')
            }
        })
    },[lotery])

    const getNumberContest = (id) => {
        axios.get(`${BASE_URL}/concursos/${id}`)
        .then((res) => {
            setInfoContest(res.data)
        })
        .catch((err)=> {
            alert('Ocorreu um erro, tente novamente')
        })
    }

    const states = {games, contest, lotery, infoContest}
    const setters = {setInfoContest, setLotery}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
} 