import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { CointainerFeed } from "./styles";
import FeedForm from "./FeedForm";
import { goToPost } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FeedPostCard from "../../components/FeedPostCard/FeedPostCard";

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

    const postList = posts && posts.map((item) => {
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