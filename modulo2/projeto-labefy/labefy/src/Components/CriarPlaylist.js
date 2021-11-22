import React from "react";
import styled from "styled-components";

const ContainerCriar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border-radius: 30%;
margin-top: 20vh;
color: #170F11;
padding: 10px;
width: 300px;
height: 300px;
background-color: #9B287B;

button{
    border-radius: 50px;
}

button:hover {
    background-color: #402039;
    color: #E2FCEF;
}
`

const ContainerDiv = styled.div`
display: flex;
justify-content: center;
`

export default class CriarPlaylist extends React.Component {

    render () {
    return (
        <ContainerDiv>
            <ContainerCriar>
            <h3> Crie suas Playlists: </h3>
            <input
                placeholder='Nome da Playlist'
                onChange={this.props.playlistInput}
                value={this.props.valueInputPlaylist}
            />
            <button onClick={this.props.newPlaylist}>Criar</button>
            </ContainerCriar>

        </ContainerDiv>
    )
    }
}