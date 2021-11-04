import React from 'react';
import styled from 'styled-components';

const GrandeContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
height: 200px;
`
const GrandeImg = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`
const GrandeNome = styled.h4`
margin-bottom: 15px;
`
const GrandeDiv = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <GrandeContainer>
            <GrandeImg src={ props.imagem } />
            <GrandeDiv>
                <GrandeNome>{ props.nome }</GrandeNome>
                <p>{ props.descricao }</p>
            </GrandeDiv>
        </GrandeContainer>
    )
}

export default CardGrande;