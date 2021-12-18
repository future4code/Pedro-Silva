import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { ButtonContainer, CointainerFeed, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader } from "./styles";
import FeedForm from "./FeedForm";
import { goToPost } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";

const Feed = () => {
    useProtectedPage()
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
    const navigate = useNavigate()
    const onClickCard = (post) => {
        goToPost(navigate, post)
    }

    const postList = posts.map((item) => {
        return (
            <ContainerPost onClick={() => onClickCard(item.id)}>
                <ContainerPostHeader>
                    <p><b>{item.title}</b></p>
                    <h3>{`${item.username}`}</h3>
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
        )
    })





    return (
        <CointainerFeed>
            <h2>Crie seu Post</h2>
            <FeedForm
            getPosts={getPosts}/>

            <h2>Feed</h2>
            {postList}
        </CointainerFeed>
    )
}

export default Feed;