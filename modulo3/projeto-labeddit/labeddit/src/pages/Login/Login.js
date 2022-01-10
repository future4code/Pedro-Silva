import { Button } from "@material-ui/core";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styles";
import logo from '../../assets/logo.png';
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from '../../routes/cordinator'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Login = ({setRightButtonText}) => {
    useUnprotectedPage()
    const navigate = useNavigate()
    

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                    <Button
                        onClick={() => goToSignUp(navigate)}
                        type={'submit'}
                        fullWidth
                        variant={"text"}
                        color={'primary'}
                    > Sem conta? Cadastre-se! </Button>

            </SignUpButtonContainer>
        </ScreenContainer>
    )

}

export default Login;