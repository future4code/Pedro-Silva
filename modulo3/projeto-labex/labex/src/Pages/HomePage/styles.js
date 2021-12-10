import styled from "styled-components";

export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;

div{
    margin-top: 80px;
}
`

export const ContainerTextImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 80px;

iframe{
    width: 30vw;
    height: 50vh;
}

div{
    margin-right: 150px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 2px #ECD444;
    width: 30vw;
    height: 30vh;
    text-align: center;
}
`