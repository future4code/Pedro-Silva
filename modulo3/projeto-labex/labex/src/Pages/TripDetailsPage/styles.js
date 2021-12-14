import styled from "styled-components";


export const DivBodyDetails = styled.div`
display: grid;
grid-template-rows: 80px 1fr;
height: 100vh;
`

export const ContainerDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
height: 100%;
justify-content: flex-start;

h3{
    color:white;
}

h4{
    color: white;
}

p{
    color: white;
}
`


export const CardCandidate = styled.div`
min-width: 320px;
width: 30vw;
height: 27vh;
padding: 10px 10px;
margin-top: 15px;
border-radius: 5px;
box-shadow: rgba(236, 212, 68) 1px 1px 5px 5px;

button{
    margin-left: 8vw;
    cursor: pointer;
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
`
export const DivCandidates = styled.div`
display: flex;
flex-direction: column;
align-items: center;

li{
    color: white;
    margin-bottom: 40px;
    
}
`
