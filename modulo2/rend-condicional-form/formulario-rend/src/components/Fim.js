import React from 'react';
import styled from 'styled-components';

const ContainerForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Frase = styled.p`
font-size: 20px;
`

export default class Fim extends React.Component {

    render() {
        return (
            <ContainerForm>
                <h1>O FORMULÁRIO ACABOU</h1>
                <Frase>Muito obrigado por participar! Entraremos em contato!</Frase>
            </ContainerForm>
        );
    }
}
