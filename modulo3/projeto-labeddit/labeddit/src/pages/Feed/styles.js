import styled from "styled-components";

export const CointainerFeed = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerPost = styled.div`
margin-top: 4vh;
display: flex;
flex-direction: column;
width: 25vw;
min-height: 25vh;
min-width: 350px;
border-radius: 20px;
box-shadow: rgba(116, 99, 191) 1px 1px 5px 5px;

:hover{
    background-color: lightgrey;
    cursor: pointer;
}
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
`

export const ContainerPostBody = styled.div`
border-bottom: 1px solid #7463bf;
border-top: 1px solid #7463bf;
min-height: 60%;


p{
    margin-left: 10px;
    min-height: 60px;
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
// Post

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`