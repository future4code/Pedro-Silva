import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { CointainerPage, TextPostPage } from "./styles";
import PostForm from "./PostForm";
import axios from "axios";
import FeedPostCard from "../../components/FeedPostCard/FeedPostCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import Loading from "../../components/Loading/Loading";



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
                    
                    getComments()
                })
                .catch((err) => {})

        } else if (dir === -1) {
            axios.put(`${BASE_URL}/comments/${id}/votes`, body, headers)
                .then((res) => {
                    getComments()
                })
                .catch((err) => {})

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
                getComments()
            })
            .catch((err) => {})
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



    const renderPost = post && post.map((item) => {
        if (item.id === params.id) {
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
                />
            )
        }
    })

    const postComments = comments && comments.map((item) => {
        return (
            <CommentCard
                key={item.id}
                username={item.username}
                body={item.body}
                userVote={item.userVote}
                voteSum={item.voteSum}
                id={item.id}
                createVoteComment={createVoteComment}
                deleteVoteComment={deleteVoteComment}
            />
        )
    })

    return (
        <div>
            {renderPost.length > 0 ?
                <CointainerPage>
                    {renderPost}

                    <TextPostPage variant='h5' color="error">
                        Comentários
                    </TextPostPage>
                    <PostForm
                        getComments={getComments}
                        paramsId={params.id} />
                    {postComments}
                </CointainerPage>
                :
                <Loading />}
        </div>
    )

}

export default Post;