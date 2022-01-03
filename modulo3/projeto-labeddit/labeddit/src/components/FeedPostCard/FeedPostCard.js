import { ButtonContainer, CommentIcon, ContainerPost, ContainerPostBody, ContainerPostFooter, ContainerPostHeader, IconComment, TextBody, TextHeader } from "./styles"
import { ArrowUpward } from "@material-ui/icons";
import { ArrowDownward } from "@material-ui/icons";
import { IconButton} from "@material-ui/core";



const FeedPostCard = (props) => {
    return (
        <ContainerPost>
            <ContainerPostHeader onClick={props.onClick}>
                <TextHeader variant='h6' color='primary'>
                {props.title}
                </TextHeader>
                <TextHeader variant='h6' color='primary'>
                    {props.username}
                </TextHeader>
            </ContainerPostHeader>
            <ContainerPostBody onClick={props.onClick}>
                <TextBody variant ='body1' color='error' align='left'>
                    {props.body}
                </TextBody>
            </ContainerPostBody>
            <ContainerPostFooter>
                <ButtonContainer>
                    {props.userVote === 1 ?
                        <IconButton onClick={() => props.deleteVote(props.id)}>
                            <ArrowUpward color={props.userVote === 1 ? "secondary" : "inherit"} />
                        </IconButton> :
                        <IconButton onClick={() => props.createVote(props.id, 1)}>
                            <ArrowUpward color={props.userVote === 1 ? "secondary" : "inherit"} />
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
                    <IconComment color={'primary'} onClick={props.onClick}/>
                    <p>{!props.commentCount ? 0 : props.commentCount}</p>
                </CommentIcon>
            </ContainerPostFooter>
        </ContainerPost>

    )
}

export default FeedPostCard;