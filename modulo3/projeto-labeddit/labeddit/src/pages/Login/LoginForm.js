import { Button, TextField } from "@material-ui/core";
import { InputsContainer } from "./styles";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setRightButtonText}) => {
    const [form, onChangeInput, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButtonText)
    }


    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={'email'}
                        value={form.email}
                        onChange={onChangeInput}
                        label={'E-mail'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'email'}
                    />

                    <TextField
                        name={'password'}
                        value={form.password}
                        onChange={onChangeInput}
                        label={'Senha'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'password'}
                    />

                    <Button
                        type={'submit'}
                        fullWidth
                        variant={"contained"}
                        color={'primary'}
                    > Logar! </Button>

                </form>
            </InputsContainer>
    )

}

export default LoginForm;