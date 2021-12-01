import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";


// ------- STYLES ---------
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

h3{
  margin-left: 160px;
}
`
const CardProfile = styled.div`
width: 400px;
height: 400px;



img{
    width: 100%;
    height: 300px;
}
`
const ButtonDiv = styled.div`
margin-top: 30px;
display: flex;
justify-content: space-evenly;

button{
border:1px solid;
border-radius: 50%;
width:50px;
height: 50px;
font-size: 20px;
}
`

// -------------------------



function ChooseHome(props) {
    const [people, setPeople] = useState({})


    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = (() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/PedroHenrique/person`,{
            headers: {
                Authorization: 'pedro-silva-carver'
            }
        })
    
        .then((res) => {
            setPeople(res.data.profile)
        })

        .catch((erro) => {
            console.log(erro.response)
        })
    })

    const choosePerson = (() => {
        const body = {id: people.id, choice: true}
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/PedroHenrique/choose-person`, body, {
            headers: {
                Authorization: 'pedro-silva-carver'
            }
        })
    
        .then((res) => {
            getProfileToChoose()
        })

        .catch((erro) => {
            console.log(erro.response)
        })
    })



    const profileChoose = <CardProfile> <img src={people.photo}></img>
    <h4>{people.name}, {people.age}</h4>
    <p>{people.bio}</p>
    </CardProfile>


    return (
        <AppContainer>
            <HeaderContainer>
                <h3> Astromatch </h3>
                <button onClick={props.matchPage}>Matches</button>
            </HeaderContainer>
            {profileChoose}
            <ButtonDiv>
                <button onClick={getProfileToChoose}>X</button>
                <button onClick={choosePerson}>S</button>
            </ButtonDiv>
        </AppContainer>
    )
}

export default ChooseHome;