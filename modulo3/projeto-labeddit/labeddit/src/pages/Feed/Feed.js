import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { ButtonContainer, CointainerFeed, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader } from "./styles";
import FeedForm from "./FeedForm";
import { goToPost } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Feed = () => {
    useProtectedPage()
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate()
    const onClickCard = (post) => {
        goToPost(navigate, post)
    }

    const createVote = (id, dir) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        const body = {
            direction: dir
        }

        if (dir === 1) {
            axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                    getPosts()
                })
                .catch((err) => { console.log(err.response) })

        } else if (dir === -1) {
            axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    console.log(res)
                    getPosts()
                })
                .catch((err) => { console.log(err.response) })

        }
    }

    const deleteVote = (id) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        axios.delete(`${BASE_URL}/posts/${id}/votes`, headers)
                .then((res) => {
                    console.log(res)
                    getPosts()
                })
                .catch((err) => { console.log(err.response)})
    }

    const postList = posts.map((item) => {
        return (
            <ContainerPost>
                <ContainerPostHeader onClick={() => onClickCard(item.id)}>
                    <p><b>{item.title}</b></p>
                    <h3>{`${item.username}`}</h3>
                </ContainerPostHeader>
                <ContainerPostBody>
                    <p>{item.body}</p>
                </ContainerPostBody>
                <ContainerPostFooter>
                    <ButtonContainer>
                        {item.userVote === 1 ? <button onClick={() => deleteVote(item.id)}>Up</button> : <button onClick={() => createVote(item.id, 1)}>Up</button>}
                        <p>{!item.voteSum ? 0 : item.voteSum}</p>
                        {item.userVote === -1 ? <button onClick={() => deleteVote(item.id)}>Down</button> : <button onClick={() => createVote(item.id, -1)}>Down</button>}
                    </ButtonContainer>
                    <div>
                        <p>{`${!item.commentCount ? 0 : item.commentCount} comentários`}</p>
                    </div>
                </ContainerPostFooter>
            </ContainerPost>
        )
    })





    return (
        <CointainerFeed>
            <h2>Crie seu Post</h2>
            <FeedForm
                getPosts={getPosts} />

            <h2>Feed</h2>
            {postList}
        </CointainerFeed>
    )
}

export default Feed;