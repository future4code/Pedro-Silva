import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/Logo.png"

const HeaderContainer = styled.div`
display: flex;
background-color: #6E2594;
height: 80px;
align-items: center;
color: white;
justify-content: space-between;
`
const ContainerLogo = styled.div`
display: flex;
align-items: center;

img{
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-right: 20px;
}
`
const ContainerButton = styled.div`
margin-right: 30px;

button {
    margin-right: 20px;
}
`

const Header = (props) => {



    return (
        <HeaderContainer>
            <ContainerLogo>
                <img src={logo} alt='logo'></img>
                <h1>LabeX</h1>
            </ContainerLogo>

            <ContainerButton>
                <button onClick={props.home}>Home</button>
                <button onClick={props.back}>Voltar</button>
            </ContainerButton>
        </HeaderContainer>
    )
}

export default Header;