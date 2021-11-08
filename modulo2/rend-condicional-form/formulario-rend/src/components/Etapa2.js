import React from 'react';
import styled from 'styled-components';

const ContainerEtapa2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`
const ListaPerguntas = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Pergunta = styled.p`
padding-bottom: 5px;
padding-top: 10px;
`


export default class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerEtapa2>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <ListaPerguntas>
                    <Pergunta>5. Qual curso?</Pergunta>
                    <input />
                    <Pergunta>6. Qual a unidade de ensino?</Pergunta>
                    <input />
                </ListaPerguntas>
            </ContainerEtapa2>
        );
    }
}

