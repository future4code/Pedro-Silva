import styled from "styled-components"

export const ContainerPage = styled.div`
display: flex;
min-height: 100vh;
background-color: #6BEFA3;
`

export const ContainerLotto = styled.div`
width: 40vw;
`

export const ContainerSelect = styled.div`
height: 43vh;
display: flex;
justify-content: center;

select {
    margin-top: 50px;
    width: 190px;
    height: 50px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
}
`

export const ContainerName = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
    font-size: 30px;
    color: white;
}
`

export const ContainerNumbers = styled.div`
border-top-left-radius: 80vh 200vw;
border-bottom-left-radius: 80vh 200vw;;
background-color: #EFEFEF;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
flex-direction: column;


    
`

export const Numbers = styled.div`
background-color: white;
margin-left: 30px;
height: 100px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

p{
    font-size: 30px;
}
`

export const DivText = styled.div`
`

export const DivNumbers = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
height: 80vh;
`