import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { ButtonContainer, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader } from "./styles";



const Post = () => {
    useProtectedPage()
    const params = useParams()
    const post = useRequestData([], `${BASE_URL}/posts`)

    const comments = useRequestData([],`${BASE_URL}/posts/${params.id}/comments`)

    const renderPost = post.map((item) => {
        if(item.id === params.id) {
            return <ContainerPost>
            <ContainerPostHeader>
                <h3>{item.title}</h3>
                <h3>{`c/ ${item.username}`}</h3>
            </ContainerPostHeader>
            <ContainerPostBody>
                <p>{item.body}</p>
            </ContainerPostBody>
            <ContainerPostFooter>
                <ButtonContainer>
                    <button>Up</button>
                    <p>{!item.voteSum ? 0 : item.voteSum}</p>
                    <button>Down</button>
                </ButtonContainer>
                <div>
                    <p>{`${!item.commentCount ? 0 : item.commentCount} comentários`}</p>
                </div>
            </ContainerPostFooter>
        </ContainerPost>   
        }
    })

    const postComments = comments.map((item)=>{
        return <p>{item.username}</p>
    })

    return (
        <div>
            <h3>Post</h3>
            {renderPost}
            <h3>Comentarios</h3>
            {postComments}
        </div>
    )

}

export default Post;