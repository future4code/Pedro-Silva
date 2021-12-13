import styled from "styled-components";

export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
height: 100vh;

div{
    /* margin-top: 80px; */
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
    border-radius: 10%;
    box-shadow: rgba(236, 212, 68) 1px 1px 5px 5px;

    
}

div{
    margin-right: 150px;
    margin-bottom: 110px;
    border-radius: 10%;
    width: 30vw;
    height: 30vh;
    text-align: center;
    color: white;
    box-shadow: rgba(236, 212, 68) 1px 1px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content:center;
}
`

export const ContainerButton = styled.div`
margin-top: 100px;
/* border: 1px solid white; */
display: flex;

button{
    margin-left: 10vw;
    margin-right: 10vw;
    height: 60px;
    width: 200px;
    font-size: 20px;
    background-color: #6E2594;
    color: white;
    box-shadow: rgba(236, 212, 68) 2px 2px 5px 1px;
    border-radius: 15px;
    border: 1px solid #808080;
    cursor: pointer;

    :hover{
        background-color: #ECD444;
        color: #6E2594;
        transform: scale(1.4);
    }

    :active{
        color: white;
    }



}
`
