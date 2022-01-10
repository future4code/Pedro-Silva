import CadastroForm from "./CadastroForm";
import { LogoImage, ScreenContainer } from "./styles";
import logo from '../../assets/logo.png';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Cadastro = ({setRightButtonText}) => {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <CadastroForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default Cadastro;