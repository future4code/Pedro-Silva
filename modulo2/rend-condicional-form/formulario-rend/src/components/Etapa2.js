import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';

const ContainerEtapa2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`



export default class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerEtapa2>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <PerguntaAberta pergunta={'5. Qual o curso?'}/>
                <PerguntaAberta pergunta={'6. Qual a unidade de ensino?'}/>
            </ContainerEtapa2>
        );
    }
}

