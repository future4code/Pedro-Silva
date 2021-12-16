import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { createPost } from "../../services/create"
import { InputsContainer } from "./styles"

const FeedForm = () => {
    const [form, onChangeInput, clear] = useForm({title: '', body: ''})


    const onSubmitForm =(event) => {
        event.preventDefault()
        createPost(form, clear)
    }


    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                name={'title'}
                value={form.title}
                onChange={onChangeInput}
                label={'Título'}
                required
                margin={'normal'}
                type={'text'}
                fullWidth
                variant={'outlined'}
                />

                <TextField
                name={'body'}
                value={form.body}
                onChange={onChangeInput}
                label={'Digite o conteúdo do seu post!'}
                required
                margin={'normal'}
                type={'text'}
                fullWidth
                variant={'outlined'}
                multiline
                rows={5}
                />

                <Button
                type={'submit'}
                fullWidth
                variant={"contained"}
                color={'primary'}
                > Postar</Button>
            </form>
        </InputsContainer>
    )
}

export default FeedForm;