import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { textColor } from "../../constants/colors";

export const CointainerFeed = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h2{
  color: ${textColor}
}
`
export const TextFeedPage = styled(Typography)`
margin-top: 30px;
`
// Post

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`