import styled from "styled-components";

export const ContainerAdmHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
height: 100vh;

h2{
    color: white;
}

h3{
    color: white;
    margin-top: 50px;
}
`

export const CardContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-top: 30px;
width: 30vw;
min-width: 300px;
padding: 10px 0px;
border-radius: 5px;
box-shadow: rgba(236, 212, 68) 1px 1px 5px 5px;

:hover{
    background-color: gray;
}

button{
    cursor: pointer;
    margin-right: 30px;
    height: 30px;
    background-color: #6E2594;
    color: white;
    border-radius: 15px;
    border: 1px solid #808080;
    cursor: pointer;


    :hover{
        transform: scale(1.1);
    }

    :active{
        color: yellow;
    }
}

p{
    margin-right: 7vw;
    color: white;
}

`
export const DivButtons = styled.div`
display: flex;
`

export const ButtonsAdm = styled.button`
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 30px;
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
        transform: scale(1.1);
    }

    :active{
        color: white;
    }
}
`