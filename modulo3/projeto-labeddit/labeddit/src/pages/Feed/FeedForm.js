import { Button, CircularProgress, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { InputsContainer } from "./styles"
import { BASE_URL } from "../../constants/url"
import axios from "axios";
import { useState } from "react";

const FeedForm = (props) => {
    const [form, onChangeInput, clear] = useForm({title: '', body: ''})
    const [isLoading, setIsLoading] = useState(false)

    const createPost = (event) => {
        event.preventDefault()
        setIsLoading(true)
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                clear()
                setIsLoading(false)
                alert('Post feito com sucesso!')
                props.getPosts()
            })
            .catch((err) => {
                setIsLoading(false)
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
                > 
                {isLoading ? <CircularProgress size={24} color={'inherit'} /> : 'Postar'}
                </Button>
            </form>
        </InputsContainer>
    )
}

export default FeedForm;