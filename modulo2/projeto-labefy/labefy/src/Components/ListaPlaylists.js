import React from "react";
import styled from "styled-components";

const ContainerList = styled.div`
display: flex;
flex-direction: column;
align-items: center;

button{
    border-radius: 50px;
}

button:hover {
    background-color: #402039;
    color: #E2FCEF;
}
`
const CardPlaylist = styled.div`
background-color: #9B287B;
border-radius: 50px;
margin: 20px 0;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 30%;
height: 5vh;
color: #E2FCEF;
`

export default class ListaPlaylists extends React.Component {

    render() {
        return (
            <ContainerList>
                <h2> Suas Playlists: </h2>

                {this.props.listPlaylists.map((item) => {
                    return (
                        <CardPlaylist key={item.id}>
                            

                            <p>{item.name}</p>

                            <button onClick={() => this.props.listDetails(item.id)}>Ver Playlist</button>
                            <button onClick={() => this.props.delete(item.id)}>Deletar</button>
    
                        </CardPlaylist>
                    )
                })}

                <button onClick={this.props.voltarCriar}> Voltar</button>
            </ContainerList>
        )
    }
}