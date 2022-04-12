import { render } from "@testing-library/react";
import React, { useContext } from "react";
import GlobalStateContext from "../../context/globalStateContext";
import { ContainerLotto, ContainerName, ContainerNumbers, ContainerPage, ContainerSelect, DivNumbers, DivText, Numbers } from "./styles";


export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext);
    const { games, lotery, infoContest } = states
    const { setLotery } = setters


    const onChangeSelect = (event) => {
        games.map((g) => {
            if (event.target.value === g.nome) {
                setLotery(g)
            }
        })
    }

    const renderNumbers = infoContest.numeros && infoContest.numeros.map((data) => {
        return <Numbers>
            <p>{data}</p>
        </Numbers>
    })

    const renderOptions = games.map((g) => {
        return <option key={g.id} value={g.nome}>
            {g.nome.toUpperCase()}
        </option>
    })


    return (
        <ContainerPage>
            <ContainerLotto>
                <ContainerSelect>
                    <select onChange={onChangeSelect}>
                        {renderOptions}
                    </select>
                </ContainerSelect>
                <ContainerName>
                    <p>{lotery && lotery.nome.toUpperCase()}</p>
                </ContainerName>
            </ContainerLotto>
            <ContainerNumbers>
                <DivNumbers>
                    {renderNumbers}
                </DivNumbers>
                <DivText>
                    <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </DivText>
            </ContainerNumbers>

        </ContainerPage>
    )
}