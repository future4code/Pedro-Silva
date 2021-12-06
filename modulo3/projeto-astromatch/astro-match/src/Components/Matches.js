import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import ArrowIcon from "../Img/arrow.png"


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
border-bottom: 0.5px solid gray;
background-color: violet;

img{
    width:35px;
    margin-left: 10px;
    cursor: pointer;

    :hover{
        transform: scale(1.3)
    }
}

button{
    margin-right: 5px;
    border-radius: 5px;
    background-color: gray;
    cursor: pointer;
    border: none;
    color: black;

    :hover{
        background-color: white
    }

    :active{
        background-color: violet;
    }
}
`
const MatchCard = styled.div`
display: flex;
align-items: center;
height: 60px;
margin-left: 30px;
margin-right: 30px;
margin-top: 10px;
cursor: pointer;
border-radius: 5px;

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
                <img onClick={props.choosePage} src={ArrowIcon}/>
                <h3> Matches </h3>
                <button onClick={clear}>Limpar</button> 
            </HeaderContainer>
            {matchesYes}
        </AppContainer>
    )
}

export default Matches;