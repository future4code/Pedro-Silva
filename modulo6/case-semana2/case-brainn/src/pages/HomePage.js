import { render } from "@testing-library/react";
import React, { useContext } from "react";
import GlobalStateContext from "../context/globalStateContext";


export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext);
    const { games, lotery, infoContest} = states
    const { setLotery} = setters
    

    const onChangeSelect = (event) => {
        games.map((g) => {
            if(event.target.value === g.nome){
                setLotery(g)
            }
        })
    }

    const renderNumbers = infoContest.numeros && infoContest.numeros.map((data) => {
        return <div>
            {data}
        </div>
    })

    const renderOptions = games.map((g) => {
        return <option key={g.id} value={g.nome}>
            {g.nome.toUpperCase()}
             </option>
    })
   

    return (
        <div>
            <div>
                <p>{lotery && lotery.nome}</p>
                <select onChange={onChangeSelect}>
                    {renderOptions}
                </select>
            </div>
            <div>
                <p>Numeros</p>
                {renderNumbers}
            </div>

        </div>
    )
}