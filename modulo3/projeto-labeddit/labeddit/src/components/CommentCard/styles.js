import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const ContainerComment = styled.div`
border: 1px solid black;
width: 25vw;
min-height: 15vh;
margin-top: 4vh;
min-width: 350px;
border-radius: 10px;
box-shadow: rgba(116, 99, 191) 1px 1px 5px 5px;
`

export const HeaderComment = styled.div`
border-bottom: 1px solid ${primaryColor};
min-height: 20%;
display: flex;
align-items: center;

p{
    margin-left: 10px;
}
`

export const BodyComment = styled.div`
min-height: 60%;

p{
    margin: 0;
    padding: 10px;
    min-height: 60px;
}
`
export const FooterComment = styled.div`
display: flex;
align-items: center;
height: 20%;
padding-left: 10px;

button{
    margin-left: 10px;
}

p{
    margin-left: 10px;
}
`