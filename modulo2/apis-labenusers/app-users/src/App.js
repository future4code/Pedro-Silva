import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaUser from "./Components/TelaUser";



export default class App extends React.Component {
  state = {
    userName: '',
    email: '',
    userList: [],
    page: 1
  }

  componentDidMount() {
    this.getUserList()
  }

  getUserList = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })

      .then((response) => {
        this.setState({ userList: response.data })
      })

      .catch((erro) => {
        alert(erro.response)
      })
  }

  createUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.email
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })

      .then(() => {
        this.setState({ userName: '' })
        this.setState({ email: '' })
        this.getUserList()
        alert('Cadastrado com sucesso.')
      })

      .catch(() => {
        alert("Erro.")
      })
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'pedro-silva-carver'
      }
    })
      .then(() => {
        alert('Usuário Deletado')
        this.getUserList()
      })

      .catch ((error) => {
        alert('Erro')
        console.log(error.response)
      })
  }



  onChangeNome = (event) => {
    this.setState({ userName: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  mudarPagina = () => {
    if (this.state.page === 1) {
      return this.setState({ page: 2 })

    } else if (this.state.page === 2) {
      return this.setState({ page: 1 })
    }
  }

  render() {

    const pageCadastro = <div>
      <h2> Cadastro </h2>
      <input
        value={this.state.userName}
        placeholder="Nome"
        onChange={this.onChangeNome} />
      <input
        value={this.state.email}
        placeholder="E-mail"
        onChange={this.onChangeEmail} />
      <button onClick={this.createUser}>Criar usuário</button>
    </div>

    const pageLista = <div>
      <h2> Lista de Usuários </h2>
      {this.state.userList.map((item) => {
        return <TelaUser 
        list={item.name}
        botao={() => this.deleteUser(item.id)}
        />
      })}
    </div>

    return (
      <div>
        <div>
          <button onClick={this.mudarPagina}>Tela Usuários/Voltar</button>
        </div>

        {this.state.page === 1 ? pageCadastro : pageLista}

      </div>
    )
  }
}

