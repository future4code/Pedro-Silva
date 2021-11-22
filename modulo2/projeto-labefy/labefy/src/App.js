import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import CriarPlaylist from "./Components/CriarPlaylist";
import ListaPlaylists from "./Components/ListaPlaylists";
import Musicas from "./Components/Musicas";

const GlobalStyle = createGlobalStyle`
margin:0;
padding: 0;
`
const Body = styled.div`
display:grid;
grid-template-rows: 60px 1fr 60px;
width: 100%;
height: 100vh;
background: rgb(64,32,57);
background: radial-gradient(circle, rgba(64,32,57,1) 0%, rgba(155,40,123,1) 0%, rgba(226,252,239,1) 100%);
header {
  display:flex;
  align-items:center;
  justify-content: space-between;
}

header>h1,h2{
  margin-left: 30px;
  color: #170F11
}

header>h1{
  cursor:pointer;
}

header>button,h2{
  margin-right: 60px;
}

header>h2:hover{
  color: #E2FCEF;
}

footer{
  background-color: #170F11;
  text-align: center;
  color: #E2FCEF
}
`
const Cursor = styled.h2`
cursor: pointer;
`
export default class App extends React.Component {
  state = {
    playlistName: '',
    playlists: [],
    playlistTracks: [],
    musicName: '',
    artistaName: '',
    urlLink: '',
    playlistId: '',
    page: 'criar'
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
        this.setState({
          playlistTracks: response.data.result.tracks,
          playlistId: id,
          page: 'musicas'
        })
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

  renderPage = () => {
    if (this.state.page === 'criar') {
      return <CriarPlaylist
        playlistInput={this.onChangePlaylistName}
        valueInputPlaylist={this.state.playlistName}
        newPlaylist={this.createPlaylist} />


    } else if (this.state.page === 'listaPlaylists') {
      return <ListaPlaylists
        listPlaylists={this.state.playlists}
        listDetails={this.getPlaylistsTracks}
        delete={this.deletePlaylist}
        voltarCriar={this.trocarParaPageCriar} />

    } else if (this.state.page === 'musicas') {
      return <Musicas
        inputMusicName={this.onChangeMusicName}
        valueMusicName={this.state.musicName}
        inputArtistName={this.onChangeArtistName}
        valueArtistName={this.state.artistaName}
        inputUrlLink={this.onChangeUrlLink}
        valueUrlLink={this.state.urlLink}
        addMusic={this.addTrackToPlaylist}
        viewMusic={this.state.playlistTracks}
        voltarPlaylist={this.trocarParaPageLista} />
    }

  }

  trocarParaPageLista = () => {
    if (this.state.page === "criar" || "musicas") {
      this.setState({ page: "listaPlaylists" })
    }
  }

  trocarParaPageCriar = () => {
    if (this.state.page === "listaPlaylists" || "musicas") {
      this.setState({ page: "criar" })
    }
  }

  trocarParaPageMusica = () => {
    if (this.state.page === "listaPlaylists" || "criar") {
      this.setState({ page: "musica" })
    }
  }

  




  render() {


    return (
      <Body>
        <GlobalStyle />
        <header>
          <h1 onClick={this.trocarParaPageCriar}>Labefy</h1>
          <Cursor onClick={this.trocarParaPageLista}>Playlists</Cursor>
          <button> Login </button>
        </header>

        {this.renderPage()}

        <footer>
          <div>
          <p>Pedro Henrique - Carver </p>
          </div>
        </footer>

      </Body>
    )
  }
}