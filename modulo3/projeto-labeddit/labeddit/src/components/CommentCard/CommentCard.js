import { ArrowUpward } from "@material-ui/icons";
import { ArrowDownward } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { BodyComment, ContainerComment, FooterComment, HeaderComment } from "./styles";


const CommentCard = (props) => {
    return (
        <ContainerComment>
            <HeaderComment>
                <p><b>{props.username}</b></p>
            </HeaderComment>

            <BodyComment>
                <p>{props.body}</p>
            </BodyComment>

            <FooterComment>
                {props.userVote === 1 ?
                    <IconButton onClick={() => props.deleteVoteComment(props.id)}>
                        <ArrowUpward color={props.userVote === 1 ? "primary" : "inherit"}/>
                    </IconButton> :
                    <IconButton onClick={() => props.createVoteComment(props.id, 1)}>
                        <ArrowUpward color={props.userVote === 1 ? "primary" : "inherit"}/>
                    </IconButton>
                }
                <p>{!props.voteSum ? 0 : props.voteSum}</p>
                {props.userVote === -1 ?
                    <IconButton onClick={() => props.deleteVoteComment(props.id)}>
                        <ArrowDownward color={props.userVote === -1 ? "secondary" : "inherit"}/>
                    </IconButton> :
                    <IconButton onClick={() => props.createVoteComment(props.id, -1)}>
                        <ArrowDownward color={props.userVote === -1 ? "secondary" : "inherit"}/>
                    </IconButton>
                }
            </FooterComment>

        </ContainerComment>
    )
}

export default CommentCard;