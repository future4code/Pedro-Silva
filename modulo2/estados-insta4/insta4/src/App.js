import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {

    usuariosPosts : [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'usuário123',
        fotoUsuario: 'https://picsum.photos/id/1060/536/354?blur=2',
        fotoPost: 'https://picsum.photos/seed/picsum/536/354'
      },
      {
        nomeUsuario: 'usuário321',
        fotoUsuario: 'https://picsum.photos/536/354',
        fotoPost: 'https://picsum.photos/id/870/536/354?grayscale&blur=2'
      }
    ],
    valorInputNomeUsuario:'',
    valorInputFotoUsuario: '',
    valorInputFotoPost:''
  }

  incluirPost = () => {
    const postNovo = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const feedAtualizado = [...this.state.usuariosPosts, postNovo]

    this.setState({usuariosPosts: feedAtualizado})
    this.setState({valorInputNomeUsuario: ''})
    this.setState({valorInputFotoUsuario: ''})
    this.setState({valorInputFotoPost: ''})
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }




  render() {

    const listaPost = this.state.usuariosPosts.map((item) => {
      return <Post
      nomeUsuario={item.nomeUsuario}
      fotoUsuario={item.fotoUsuario}
      fotoPost={item.fotoPost}
      />
    })
    return (
      <MainContainer>
        <input
      placeholder={"Nome de Usuário"}
      value= {this.state.valorInputNomeUsuario}
      onChange={this.onChangeInputNomeUsuario}
      />
      <input
      placeholder={"Foto de Usuário"}
      value= {this.state.valorInputFotoUsuario}
      onChange={this.onChangeInputFotoUsuario}
      />
      <input
      placeholder={"Foto do post"}
      value={this.state.valorInputFotoPost}
      onChange={this.onChangeInputFotoPost}
      />
      <button onClick={this.incluirPost}>Enviar</button>
        {listaPost}
        </MainContainer>
    );
  }
}

export default App;
