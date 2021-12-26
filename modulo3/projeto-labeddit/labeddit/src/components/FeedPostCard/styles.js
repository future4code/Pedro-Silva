import styled from "styled-components";

export const ContainerPost = styled.div`
margin-top: 4vh;
display: flex;
flex-direction: column;
width: 40vw;
min-height: 30vh;
min-width: 350px;
border-radius: 20px;
box-shadow: rgba(116, 99, 191) 1px 1px 5px 5px;
`

export const ContainerPostHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 20%;

p{
    margin-right: 10px;
    margin-left: 10px;
}

h3{
    margin-right: 10px;
}

:hover{
    cursor: pointer;
}
`

export const ContainerPostBody = styled.div`
border-bottom: 1px solid #7463bf;
border-top: 1px solid #7463bf;
min-height: 20vh;


p{
    margin-left: 10px;
    min-height: 60px;
}

:hover{
    cursor: pointer;
}
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
height:20%;

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
}
`