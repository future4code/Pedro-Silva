import { ButtonContainer, CommentIcon, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader } from "./styles"
import { ArrowUpward } from "@material-ui/icons";
import { ArrowDownward } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Comment } from "@material-ui/icons";



const FeedPostCard = (props) => {
    return (
        <ContainerPost>
            <ContainerPostHeader onClick={props.onClick}>
                <p><b>{props.title}</b></p>
                <h3>{`${props.username}`}</h3>
            </ContainerPostHeader>
            <ContainerPostBody onClick={props.onClick}>
                <p>{props.body}</p>
            </ContainerPostBody>
            <ContainerPostFooter>
                <ButtonContainer>
                    {props.userVote === 1 ?
                        <IconButton onClick={() => props.deleteVote(props.id)}>
                            <ArrowUpward color={props.userVote === 1 ? "primary" : "inherit"} />
                        </IconButton> :
                        <IconButton onClick={() => props.createVote(props.id, 1)}>
                            <ArrowUpward color={props.userVote === 1 ? "primary" : "inherit"} />
                        </IconButton>
                    }
                    <p>{!props.voteSum ? 0 : props.voteSum}</p>
                    {props.userVote === -1 ?
                        <IconButton onClick={() => props.deleteVote(props.id)}>
                            <ArrowDownward color={props.userVote === -1 ? "secondary" : "inherit"}/>
                        </IconButton> :
                        <IconButton onClick={() => props.createVote(props.id, -1)}>
                            <ArrowDownward color={props.userVote === -1 ? "secondary" : "inherit"}/>
                        </IconButton>
                    }
                </ButtonContainer>
                <CommentIcon>
                    <p>{!props.commentCount ? 0 : props.commentCount}</p>
                    <Comment color={'primary'}/>
                </CommentIcon>
            </ContainerPostFooter>
        </ContainerPost>

    )
}

export default FeedPostCard;