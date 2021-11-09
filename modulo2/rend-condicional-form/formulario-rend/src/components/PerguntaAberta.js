import React from "react";
import styled from "styled-components";

const ListaPerguntas = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Pergunta = styled.p`
padding-bottom: 5px;
padding-top: 10px;
`

export default class PerguntaAberta extends React.Component {
    render() {
        return <ListaPerguntas>
            <Pergunta>{this.props.pergunta}</Pergunta>
            <input/>
        </ListaPerguntas>
    }
}