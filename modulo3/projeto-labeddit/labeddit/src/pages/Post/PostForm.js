import { Button, CircularProgress, TextField } from "@material-ui/core"
import { InputsContainer } from "./styles"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import useForm from "../../hooks/useForm"
import { useState } from "react"

const PostForm = (props) => {
    const [form, onChangeInput, clear] = useForm({body: ''})
    const [isLoading, setIsLoading] = useState(false)  
    

    const createComment = (event) => {
        event.preventDefault()
        setIsLoading(true)
        axios.post(`${BASE_URL}/posts/${props.paramsId}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                clear()
                setIsLoading(false)
                alert('Comentário realizado!')
                props.getComments()
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }


    return(
        <InputsContainer>
        <form onSubmit={createComment}>
        <TextField
        name={'body'}
        value={form.body}
        onChange={onChangeInput}
        label={'Faça seu comentário'}
        required
        margin={'normal'}
        type={'text'}
        fullWidth
        variant={'outlined'}
        multiline
        rows={3}
        
        />

        <Button
        type={'submit'}
        fullWidth
        variant={"contained"}
        color={'primary'}
        >
        {isLoading ? <CircularProgress size={24} color={'inherit'} /> : 'Comentar'}
        </Button>

        </form>
        </InputsContainer>
    )
}

export default PostForm;