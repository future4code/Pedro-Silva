import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { BodyComment, ButtonContainer, CointainerPage, ContainerComment, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader, FooterComment, HeaderComment } from "./styles";
import PostForm from "./PostForm";



const Post = () => {
    useProtectedPage()
    const params = useParams()
    const [post, getPosts] = useRequestData([], `${BASE_URL}/posts`)

    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const renderPost = post.map((item) => {
        if (item.id === params.id) {
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
                    <button>Up</button>
                    <p>{!item.voteSum ? 0 : item.voteSum}</p>
                    <button>Down</button>
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
            paramsId={params.id}/>
            {postComments}
        </CointainerPage>
    )

}

export default Post;