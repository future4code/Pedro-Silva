import { Button } from "@material-ui/core";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styles";
import logo from '../../assets/logo.png';
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from '../../routes/cordinator'

const Login = () => {
    const navigate = useNavigate()
    

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm/>
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