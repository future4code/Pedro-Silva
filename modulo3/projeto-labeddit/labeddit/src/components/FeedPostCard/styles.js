import { Typography } from "@material-ui/core";
import { Comment } from "@material-ui/icons";
import styled from "styled-components";

export const ContainerPost = styled.div`
margin-top: 4vh;
margin-bottom: 1vh;
display: flex;
flex-direction: column;
width: 30vw;
min-height: 25vh;
min-width: 350px;
border-radius: 20px;
box-shadow: rgba(116, 99, 191) 1px 1px 5px 5px;

`

export const ContainerPostHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 5vh;

:hover{
    cursor: pointer;
    background-color: #D5CFE1;
    border-radius: 20px 20px 0px 0px;
}
`

export const TextHeader = styled(Typography)`
margin-left: 10px;
margin-right: 10px;
`

export const ContainerPostBody = styled.div`
border-bottom: 1px solid #7463bf;
border-top: 1px solid #7463bf;
min-height: 15vh;




:hover{
    cursor: pointer;
    background-color: #D5CFE1;
}
`
export const TextBody = styled(Typography)`
margin-left: 10px;
min-height: 60px;
margin-top: 20px;

`


export const ButtonContainer = styled.div`
display:flex;
align-items: center;
margin-left: 10px;

p{
    margin-left: 10px;
    margin-right: 10px;
}
`

export const ContainerPostFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
min-height:5vh;

div{
    margin-right: 10px;
}
`
export const CommentIcon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

p{
    margin-right: 5px;
    margin-left: 5px;
    
}
`
export const IconComment = styled(Comment)`
cursor: pointer;
`