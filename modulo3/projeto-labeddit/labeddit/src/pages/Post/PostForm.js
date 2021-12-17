import { Button, TextField } from "@material-ui/core"
import { InputsContainer } from "./styles"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"
import useForm from "../../hooks/useForm"

const PostForm = (props) => {
    const [form, onChangeInput, clear] = useForm({body: ''})
    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${props.paramsId}/comments`)

    const createComment = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/posts/${props.paramsId}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                alert('Comentário realizado!')
                clear()
                getComments()
            })
            .catch((err) => {
                console.log(err)
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
        >Comentar</Button>

        </form>
        </InputsContainer>
    )
}

export default PostForm;