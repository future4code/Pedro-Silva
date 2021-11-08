import React from 'react';
import styled from 'styled-components';

const ContainerEtapa1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`
const ListaPerguntas = styled.ol`
display: flex;
flex-direction: column;
align-items: center;
padding-right: 40px;
`
const Pergunta = styled.li`
padding-bottom: 20px;
padding-top: 10px;
`

export default class Etapa1 extends React.Component {

    render() {
        return (
            <ContainerEtapa1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <ListaPerguntas>
                    <Pergunta>Qual o seu nome?</Pergunta>
                    <input />
                    <Pergunta>Qual a sua idade?</Pergunta>
                    <input />
                    <Pergunta>Qual seu email?</Pergunta>
                    <input />
                    <Pergunta>Qual a sua escolaridade?</Pergunta>
                    <select>
                        <option selected>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                </ListaPerguntas>
            </ContainerEtapa1>
        );
    }
}