import styled from "styled-components"
import { primaryColor } from "../../constants/colors"


// PostPageDetail

export const CointainerPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
// PostCardDetail


export const ContainerPost = styled.div`
margin-top: 4vh;
display: flex;
flex-direction: column;
width: 30vw;
height: 25vh;
min-width: 350px;
border-radius: 20px;
box-shadow: rgba(116, 99, 191) 1px 1px 5px 5px;
`

export const ContainerPostHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 20%;

h3{
    margin-right: 10px;
    margin-left: 10px;
}
`

export const ContainerPostBody = styled.div`
border-bottom: 1px solid #7463bf;
border-top: 1px solid #7463bf;
height: 60%;

p{
    margin-left: 10px;
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

// Comentários

export const ContainerComment = styled.div`
border: 1px solid black;
width: 25vw;
height: 15vh;
margin-top: 4vh;
min-width: 350px;
border-radius: 10px;
box-shadow: rgba(116, 99, 191) 1px 1px 5px 5px;


`

export const HeaderComment = styled.div`
border-bottom: 1px solid ${primaryColor};
height: 20%;
display: flex;
align-items: center;

p{
    margin-left: 10px;
}

`

export const BodyComment = styled.div`
height: 60%;

p{
    margin: 0;
    padding: 10px
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

// Form

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`


