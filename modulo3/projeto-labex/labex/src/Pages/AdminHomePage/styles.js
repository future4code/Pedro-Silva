import styled from "styled-components";

export const DivPointer = styled.div`
margin-top: 15px;
width: 25%;
`

export const CardContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 15px;
width: 23%;
min-width: 300px;
padding: 10px 0px;
border-radius: 5px;
box-shadow: 0px 0px 2px 2px;

:hover{
    background-color: gray;
}

button{
    cursor: pointer;
    margin-right: 10px;

    :hover{
        background-color: violet;

    }
}

p{
    cursor: pointer;
}


b{
    color: purple;
    margin-left: 10px;
}

`