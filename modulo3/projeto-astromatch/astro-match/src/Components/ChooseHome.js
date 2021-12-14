import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Heart from "../Img/purple-heart.png"


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
border-bottom: 0.5px solid gray;
background-color: violet;

img{
    width:35px;
    margin-right: 10px;
    cursor: pointer;

    :hover{
        transform: scale(1.3)
    }
}

h3{
  margin-left: 160px;
}
`
const DivCard = styled.div`
display: flex;
justify-content: center;
margin-top: 5px;
align-items: center;
padding: 20px 20px 0;
`

const CardProfile = styled.div`
position: relative;
border-radius: 5px;
height: 420px;
width: 400px;
`
const ImgDiv = styled.div`
height: 100%;
width: 100%;
border-radius: 5px;
box-shadow: 0px 0px 5px 2px violet;


img{
    width: 100%;
    max-height: 300px;
    z-index: 1;
    display: block;
    border-radius: 5px;
}
`
const DivText = styled.div`


h4{
    position: absolute;
    margin-left: 20px;
    font-size: 18px;
}

p{
    position: absolute;
    margin-top: 60px;
    margin-left: 20px;

}
`
const ButtonDiv = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-evenly;
`
const ButtonNot = styled.button`
background-color: violet;
border: 1px solid gray;
border-radius: 50%;
width:50px;
height: 50px;
font-size: 30px;
color: red;
box-shadow: 0px 0px 5px 2px violet;

:hover{
    color: white;
    background-color: red;
    transform: scale(1.4);
}

:active{
    background-color: white;
    color: red;
}
`
const ButtonYes = styled.button`
border:1px solid;
border-radius: 50%;
width:50px;
height: 50px;
font-size: 30px;
color: green;
background-color: violet;
border: 1px solid gray;
box-shadow: 0px 0px 5px 2px violet;



:hover{
    color: white;
    background-color: green;
    transform: scale(1.4);
}

:active{
    background-color: white;
    color: green;
}

`

// -------------------------



function ChooseHome(props) {
    const [people, setPeople] = useState({})


    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = (() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/PedroHenrique/person`, {
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
        const body = { id: people.id, choice: true }
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



    const profileChoose = <CardProfile> 
        <ImgDiv>
        <img src={people.photo}></img>
        <DivText>
        <h4>{people.name}, {people.age}</h4>
        <p>{people.bio}</p>
        </DivText>
        </ImgDiv>
    </CardProfile>


    return (
        <AppContainer>
            <HeaderContainer>
                <h3> AstroMatch </h3>
                <img onClick={props.matchPage} src={Heart}/>
            </HeaderContainer>
            <DivCard>
            {profileChoose}
            </DivCard>
            <ButtonDiv>
                <ButtonNot onClick={getProfileToChoose}>X</ButtonNot>
                <ButtonYes onClick={choosePerson}>♥</ButtonYes>
            </ButtonDiv>
        </AppContainer>
    )
}

export default ChooseHome;