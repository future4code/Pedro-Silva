import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { CointainerFeed, TextFeedPage } from "./styles";
import FeedForm from "./FeedForm";
import { goToPost } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FeedPostCard from "../../components/FeedPostCard/FeedPostCard";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

const Feed = () => {
    useProtectedPage()
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
    const [postFilter, setPostFilter] = useState('')
    const navigate = useNavigate()
    const onClickCard = (post) => {
        goToPost(navigate, post)
    }

    const onChangeFilter = (e) => {
        setPostFilter(e.target.value)
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
                    getPosts()
                })
                .catch((err) => {})

        } else if (dir === -1) {
            axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    getPosts()
                })
                .catch((err) => {})

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
                getPosts()
            })
            .catch((err) => {})
    }

    const postList = posts.filter((item) => {
        return item.username.toLowerCase().includes(postFilter.toLowerCase()) || item.body.toLowerCase().includes(postFilter.toLowerCase())
    })
        .map((item) => {
            return (
                <FeedPostCard
                    key={item.id}
                    username={item.username}
                    title={item.title}
                    body={item.body}
                    voteSum={item.voteSum}
                    userVote={item.userVote}
                    id={item.id}
                    commentCount={item.commentCount}
                    createVote={createVote}
                    deleteVote={deleteVote}
                    onClick={() => onClickCard(item.id)}
                />
            )
        })

    return (
        <div>
            {postList.length > 0 ?
                <CointainerFeed>
                    <TextFeedPage variant='h5' color="error"> 
                    Crie seu Post 
                    </TextFeedPage>
                    <FeedForm getPosts={getPosts} />
                    <TextFeedPage variant='h5' color="error"> 
                    Feed
                    </TextFeedPage>
                    <TextField
                        onChange={onChangeFilter}
                        margin={"normal"}
                        type={'text'}
                        variant={'outlined'}
                        label={'Busca por nome/texto'}
                    />
                    {postList}
                </CointainerFeed>
                :
                <Loading />}

        </div>
    )
}

export default Feed;