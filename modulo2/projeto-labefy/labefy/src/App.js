import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardPlaylist = styled.div`
border: 1px solid black;
margin: 20px;
display: flex;
justify-content: space-between;
align-items: center;
width: 20%;
height: 5vh;


`

export default class App extends React.Component {
  state = { 
    playlistName: '',
    playlists: []

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

      .catch ((error) => {
        alert('Erro')
        console.log(error.response)
      })
  }

  onChangePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value })
  }


  render() {

    const listaDePlaylists = this.state.playlists.map ((item) => {
      return <CardPlaylist>
        <li>
          {item.name} 
        </li>  
        <button onClick={() => this.deletePlaylist(item.id)}>Deletar Playlist</button>
        </CardPlaylist>
    })






    return (
      <div>
        <h2>Playlists</h2>
        <input
        placeholder='Nome da Playlist'
        onChange={this.onChangePlaylistName}
        />
        <button onClick={this.createPlaylist}>Criar Playlists</button>
        <div>
          {listaDePlaylists}
        </div>
      </div>
    )
  }
}