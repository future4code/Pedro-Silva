import React from 'react';
import styled from 'styled-components';

const ContainerEtapa3 = styled.div`
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

export default class Etapa3 extends React.Component {
    render() {
        return (
            <ContainerEtapa3>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <ListaPerguntas>
                    <Pergunta>7. Por que você não terminou um curso de graduação?</Pergunta>
                    <input />
                    <Pergunta>8. Você fez algum curso complementar?</Pergunta>
                    <select>
                        <option selected>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </select>
                </ListaPerguntas>
            </ContainerEtapa3>
        );
    }
}
