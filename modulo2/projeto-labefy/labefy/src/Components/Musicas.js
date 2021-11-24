import React from "react";
import styled from "styled-components";


const ContainerMusicas = styled.div`
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
const AdcMusicas = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const MusicasDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 18px;
`
const CardMusicas = styled.div`
width: 250px;
height: 240px;
`

export default class Musicas extends React.Component {

    render() {
        return (
            <ContainerMusicas>
                <AdcMusicas>
                    <h2> Adicionar Música:</h2>
                    <input
                        placeholder='Nome da Música'
                        onChange={this.props.inputMusicName}
                        value={this.props.valueMusicName}
                    />
                    <input
                        placeholder='Artista'
                        onChange={this.props.inputArtistName}
                        value={this.props.valueArtistName}
                    />
                    <input
                        placeholder='Link de aúdio'
                        onChange={this.props.inputUrlLink}
                        value={this.props.valueUrlLink}
                    />
                    <button onClick={this.props.addMusic}>Adicionar na Playlist</button>
                </AdcMusicas>
                <h2>Músicas:</h2>
                <MusicasDiv>
                {this.props.viewMusic.map((music) => {
                    return (
                        <CardMusicas key={music.id}>
                            <iframe src={music.url} width='100%' height='100%' frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </CardMusicas>
                    )
                })}
                </MusicasDiv>
            </ContainerMusicas>
        )
    }
}