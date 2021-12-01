import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const AppContainer = styled.div`
border: 1px solid black;
width: 400px;
height: 600px;
border-radius: 5px;

h3{
  text-align: center;
}
`
const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;
`
const MatchCard = styled.div`
display: flex;
align-items: center;
height: 60px;
margin-left: 30px;
margin-right: 30px;
margin-top: 10px;
cursor: pointer;

:hover{
    background-color: #CECECE;
}

img{
    border-radius:50%;
    width: 50px;
    height: 50px;
    
}

p{
    margin-left:30px;
}
`


function Matches(props) {
    const [matchList, setMatchList] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = (() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/PedroHenrique/matches`,{
            headers: {
                Authorization: 'pedro-silva-carver'
            }
        })
        .then((res) => {
            setMatchList(res.data.matches)
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    })

    const clear = (() => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/PedroHenrique/clear`,{
            headers: {
                Authorization: 'pedro-silva-carver'
            }
        })
        .then((res) => {
            getMatches()
            
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    })



    const matchesYes = matchList.map((item) => {
        return (
            <MatchCard>
                <img src={item.photo}/>
                <p>{item.name}</p>
            </MatchCard>
        )
    })

    

    return (
        <AppContainer>
            <HeaderContainer>
                <button onClick={clear}>Clear</button>
                <h3> Matches </h3>
                <button onClick={props.choosePage}>Voltar</button>
            </HeaderContainer>
            {matchesYes}
        </AppContainer>
    )
}

export default Matches;