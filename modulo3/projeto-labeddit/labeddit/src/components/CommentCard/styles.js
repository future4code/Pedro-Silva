import { Typography } from "@material-ui/core"
import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const ContainerComment = styled.div`
border: 1px solid black;
width: 25vw;
min-height: 15vh;
margin-top: 2vh;
margin-bottom:2vh;
min-width: 350px;
border-radius: 10px;
box-shadow: rgba(116, 99, 191) 1px 1px 5px 5px;
`

export const HeaderComment = styled.div`
border-bottom: 1px solid ${primaryColor};
min-height: 5vh;
display: flex;
align-items: center;

p{
    margin-left: 10px;
}
`
export const TextHeader = styled(Typography)`
margin-left: 10px;
margin-right: 10px;
`

export const BodyComment = styled.div`
min-height: 50%;
`
export const TextBody = styled(Typography)`
margin-left: 10px;
min-height: 60px;
margin-top: 10px;
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