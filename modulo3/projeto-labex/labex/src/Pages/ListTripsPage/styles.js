import styled from "styled-components";

export const DivBodyTripList = styled.div`
display: grid;
grid-template-rows: 80px 1fr;
`

export const ContainerListTrips = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: black;

h2{
    color: white;
}

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
        transform: scale(1.1);
    }

    :active{
        color: white;
    }



}

`