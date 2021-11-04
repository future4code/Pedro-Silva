import React from 'react';
import styled from 'styled-components';

const EstiloDiv = styled.div`

`
const DivPequena = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
padding: 10px;
margin-bottom: 10px;
`
const Negrito = styled.p`
font-weight: bold;
margin-right: 10px;
`
const IconeImg = styled.img`
width: 30px;
height: 30px;
margin-right: 10px;
`




function CardPequeno(props) {
    return (
        <EstiloDiv>
            <DivPequena>
                <IconeImg src={props.imagem} />
                <Negrito>{props.emailNome}</Negrito>
                <p>{props.email}</p>
            </DivPequena>

            <DivPequena>
                <IconeImg src={props.imagemDois}/>
                <Negrito>{props.enderecoNome}</Negrito>
                <p>{props.endereco}</p>
            </DivPequena>
        </EstiloDiv>
    )
}

export default CardPequeno;