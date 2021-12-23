import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { BodyComment, ButtonContainer, CointainerPage, ContainerComment, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader, FooterComment, HeaderComment } from "./styles";
import PostForm from "./PostForm";
import axios from "axios";



const Post = () => {
    useProtectedPage()
    const params = useParams()
    const [post, getPosts] = useRequestData([], `${BASE_URL}/posts`)

    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const createVoteComment = (id, dir) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        const body = {
            direction: dir
        }

        if (dir === 1) {
            axios.post(`${BASE_URL}/comments/${id}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                    getComments()
                })
                .catch((err) => { console.log(err.response) })

        } else if (dir === -1) {
            axios.put(`${BASE_URL}/comments/${id}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                    getComments()
                })
                .catch((err) => { console.log(err.response) })

        }
    }

    const deleteVoteComment = (id) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        axios.delete(`${BASE_URL}/comments/${id}/votes`, headers)
                .then((res) => {
                    console.log(res)
                    getComments()
                })
                .catch((err) => { console.log(err.response)})
    }

    const renderPost = post.map((item) => {
        if (item.id === params.id) {
            return (
            <ContainerPost>
                <ContainerPostHeader>
                    <p><b>{item.title}</b></p>
                    <h3>{`${item.username}`}</h3>
                </ContainerPostHeader>
                <ContainerPostBody>
                    <p>{item.body}</p>
                </ContainerPostBody>
                <ContainerPostFooter>
                    <ButtonContainer>
                        <p>{!item.voteSum ? 0 : item.voteSum} curtidas</p>
                    </ButtonContainer>
                    <div>
                        <p>{`${!item.commentCount ? 0 : item.commentCount} comentários`}</p>
                    </div>
                </ContainerPostFooter>
            </ContainerPost>
            )
        }
    })

    const postComments = comments.map((item) => {
        return (
            <ContainerComment>
                <HeaderComment>
                    <p><b>{item.username}</b></p>
                </HeaderComment>

                <BodyComment>
                    <p>{item.body}</p>
                </BodyComment>

                <FooterComment>
                        {item.userVote === 1 ? <button onClick={() => deleteVoteComment(item.id)}>Up</button> : <button onClick={() => createVoteComment(item.id, 1)}>Up</button>}
                        <p>{!item.voteSum ? 0 : item.voteSum}</p>
                        {item.userVote === -1 ? <button onClick={() => deleteVoteComment(item.id)}>Down</button> : <button onClick={() => createVoteComment(item.id, -1)}>Down</button>}
                </FooterComment>

            </ContainerComment>
        )
    })

    return (
        <CointainerPage>
            <h3>Post</h3>
            {renderPost}

            <h3>Comentarios</h3>
            <PostForm
            getComments={getComments}
            paramsId={params.id}/>
            {postComments}
        </CointainerPage>
    )

}

export default Post;