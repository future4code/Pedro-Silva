import styled from "styled-components";

export const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: black;
height: 100vh;

h2{
    color: white;
}
`


export const DivForm = styled.div`
box-shadow: rgba(236, 212, 68) 1px 1px 5px 5px;
border-radius: 10%;
width: 20vw;
height: 25vh;

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

select{
        margin-top: 30px;
        width: 30.4vw;
        height: 30px;
        border-radius: 5px;
    }

    input{
        margin-top: 30px;
        width: 15vw;
        height: 30px;
        border: 1px solid #808080;
        border-radius: 5px;

    }

    button{
        margin-top: 30px;
        height: 35px;
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
        transform: scale(1.2);
        }

        :active{
        color: white;
        }
      
    }
`