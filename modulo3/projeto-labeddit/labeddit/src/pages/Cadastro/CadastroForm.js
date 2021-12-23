import { Button, TextField } from "@material-ui/core";
import { InputsContainer } from "./styles";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const CadastroForm = ({setRightButtonText}) => {
    const [form, onChangeInput, clear] = useForm({ username: '', email: '', password: '' })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)

    }


    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    value={form.username}
                    name={'username'}
                    onChange={onChangeInput}
                    label={'Nome'}
                    variant='outlined'
                    fullWidth
                    required
                    autoFocus
                    margin={'normal'}
                />

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
                    pattern={'^.{8,}$'}
                    title={'Sua senha precisa ter 8 caracteres no mínimo'}
                />

                <Button
                    type={'submit'}
                    fullWidth
                    variant={"contained"}
                    color={'primary'}
                > Fazer Cadastro</Button>

            </form>
        </InputsContainer>
    )

}

export default CadastroForm;