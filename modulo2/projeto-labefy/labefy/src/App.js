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
    playlistTracks: [],
    musicName: '',
    artistaName: '',
    urlLink: '',
    playlistId: ''
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
        this.setState({ playlistTracks: response.data.result.tracks, playlistId: id })
      })

      .catch((erro) => {
        alert("Erro, tente novamente.")
      })
  }

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.musicName,
      artist: this.state.artistaName,
      url: this.state.urlLink
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`, body, {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })

      .then((response) => {
        this.setState({
          musicName: '',
          artistaName: '',
          urlLink: '',
        })
        alert('Música Adicionada!')
      })

      .catch((erro) => {
        console.log(erro.response)
        alert("Erro, tente novamente.")
      })
  }





  onChangePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value })
  }

  onChangeMusicName = (event) => {
    this.setState({ musicName: event.target.value })
  }

  onChangeArtistName = (event) => {
    this.setState({ artistaName: event.target.value })
  }

  onChangeUrlLink = (event) => {
    this.setState({ urlLink: event.target.value })
  }


  render() {

    const listaDePlaylists = this.state.playlists.map((item) => {
      return <CardPlaylist key={item.id}>

        <p>{item.name}</p>

        <button onClick={() => this.getPlaylistsTracks(item.id)}>Ver Playlist</button>
        <button onClick={() => this.deletePlaylist(item.id)}>Deletar</button>
      </CardPlaylist>
    })

    const trackList = this.state.playlistTracks.map((music) => {
      return <div key={music.id}>
        {/* <p> {music.name} - {music.artist} </p> */}
        <iframe src={music.url} width='20%' height='80' frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    })

    return (
      <div>
        <GlobalStyle />
        <div>
          <h2> Bem-vindo ao Labefy! </h2>
          <h3> Crie suas Playlists: </h3>
          <input
            placeholder='Nome da Playlist'
            onChange={this.onChangePlaylistName}
          />
          <button onClick={this.createPlaylist}>Criar Playlists</button>
          <hr />
          <div>
            <h2>Suas Playlists:</h2>
            {listaDePlaylists}
            <h2>Detalhes da Playlist:</h2>
            {trackList}
          </div>
        </div>
        <hr />
        <div>
          <h2> Adicionar Música à Playlist</h2>
          <input
            placeholder='Nome da Música'
            onChange={this.onChangeMusicName}
          />
          <input placeholder='Artista'
            onChange={this.onChangeArtistName}
          />
          <input placeholder='Link de aúdio'
            onChange={this.onChangeUrlLink}
          />
          <button onClick={this.addTrackToPlaylist}>Adicionar na Playlist</button>

        </div>
      </div>
    )
  }
}