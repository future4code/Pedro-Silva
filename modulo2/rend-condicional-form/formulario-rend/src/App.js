import React from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Fim from './components/Fim';

const Botao = styled.div`
display: flex;
justify-content: center;

`

export default class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Fim/>
      default:
        return <p>Etapa inexistente</p>
    }
  }

  mudarEtapa = () => {
    if (this.state.etapa === 1){
      this.setState({etapa: 2}) 
    } else if (this.state.etapa === 2){
      this.setState({etapa: 3})
    } else if (this.state.etapa === 3){
      this.setState({etapa: 4}) 
    }
  }


  render() {
    let botaoForm
    if (this.state.etapa === 4) {
      botaoForm = ''
    } else if (this.state.etapa <= 3){
      botaoForm = <button onClick={this.mudarEtapa}> Próxima Etapa </button>
    }

    return (
      <div>
        {this.renderizaEtapa()}
        <Botao> 
          {botaoForm}
        </Botao>
      </div>
    )
  }
}