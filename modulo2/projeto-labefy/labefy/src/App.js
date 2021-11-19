import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
margin:0;
padding: 0;
`

const CardPlaylist = styled.div`
border: 1px solid black;
margin: 20px 0;
display: flex;
justify-content: space-between;
align-items: center;
width: 30%;
height: 5vh;


`

export default class App extends React.Component {
  state = {
    playlistName: '',
    playlists: [],
    playlistTracks:[]

  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })

      .then((response) => {
        this.setState({ playlists: response.data.result.list })
        console.log(response)
      })

      .catch((erro) => {
        alert("Erro, tente novamente.")
      })
  }

  createPlaylist = () => {
    const body = {
      name: this.state.playlistName,
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })

      .then(() => {
        this.setState({ playlistName: '' })
        this.getAllPlaylists()
        alert('Playlist Criada!')
      })

      .catch(() => {
        alert('Erro.')
      })
  }

  deletePlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })
      .then(() => {
        alert('Playlist Deletada')
        this.getAllPlaylists()
      })

      .catch((error) => {
        alert('Erro')
        console.log(error.response)
      })
  }

  getPlaylistsTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })

      .then((response) => {
        this.setState({ playlists: response.data.result.tracks })
      })

      .catch((erro) => {
        alert("Erro, tente novamente.")
      })
  }

  



  onChangePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value })
  }


  render() {

    const listaDePlaylists = this.state.playlists.map((item) => {
      return <CardPlaylist>

          <p>{item.name}</p>
          <p>{item.artist}</p>
        
        <button onClick={() => this.getPlaylistsTracks(item.id)}>Ver Playlist</button>
        <button onClick={() => this.deletePlaylist(item.id)}>Deletar</button>
      </CardPlaylist>
    })

    const trackList = this.state.playlistTracks.map((music) => {
      return <div>
        <li>{music.name}</li>
        <li>{music.artist}</li>
      </div>
    })






    return (
      <div>
        <GlobalStyle />
        <div>
          <h2> Bem-vinde ao Labefy! </h2>
          <h3> Crie suas Playlists: </h3>
          <input
            placeholder='Nome da Playlist'
            onChange={this.onChangePlaylistName}
          />
          <button onClick={this.createPlaylist}>Criar Playlists</button>
          <hr/>
          <div>
            <h2>Suas Playlists:</h2>
            {listaDePlaylists}
          </div>
        </div>
        <hr/>
        <div>
          <h2> Adicionar Música à Playlist</h2>
        </div>
      </div>
    )
  }
}