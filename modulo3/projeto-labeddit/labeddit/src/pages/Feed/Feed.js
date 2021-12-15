import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { ButtonContainer, CointainerFeed, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader } from "./styles";

const Feed = () => {
    useProtectedPage()

    const posts = useRequestData([], `${BASE_URL}/posts`)

    const postList = posts.map((item) => {
        return (
            <ContainerPost>
                <ContainerPostHeader>
                    <h3>{item.title}</h3>
                    <h3>{`p/ ${item.username}`}</h3>
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
            <h2>Feed</h2>

            {postList}
        </CointainerFeed>
    )

}

export default Feed;