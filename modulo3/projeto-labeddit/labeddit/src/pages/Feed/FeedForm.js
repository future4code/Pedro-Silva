import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { InputsContainer } from "./styles"
import { BASE_URL } from "../../constants/url"
import axios from "axios";

const FeedForm = (props) => {
    const [form, onChangeInput, clear] = useForm({title: '', body: ''})
    // const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)

    const createPost = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                alert('Post feito com sucesso!')
                clear()
                props.getPosts()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <InputsContainer>
            <form onSubmit={createPost}>
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