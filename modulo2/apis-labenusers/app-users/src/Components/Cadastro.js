import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaUser from "./Components/TelaUser";


export default class Cadastro extends React.Component {
  state = {
    userName: '',
    email: '',
    userList: []
  }

  getUserList = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers: {
        'Authorization': 'pedro-silva-carver'
      }
    })

    .then((response)=> {
      this.setState({userList: response.data})
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
      headers:{
        'Authorization': 'pedro-silva-carver'
      }
    })

    .then(() => {
      this.setState({userName: ''})
      this.setState({email: ''})
      this.getUserList()
      alert ('Cadastrado com sucesso.')
    })

    .catch (()=>{
      alert("Erro.")
    })
  }





  onChangeNome = (event) => {
    this.setState({userName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  render() {

    return (
      <div>
        <div>
        <button>Tela Usuários</button>
        <hr/>
        <h2> Cadastro </h2>
        <input 
        value={this.state.userName}
        placeholder="Nome"
        onChange={this.onChangeNome}/>
        <input
        value={this.state.email}
        placeholder="E-mail"
        onChange={this.onChangeEmail}/>
        <button onClick={this.createUser}>Criar usuário</button>
        </div>
      </div>
    )
  }
}