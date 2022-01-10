import useProtectedPage from "../../hooks/useProtectedPage";
import { ErrorContainer, ErrorImg } from "./styles";
import erro from '../../assets/error.png';
import { Typography } from "@material-ui/core";

const ErrorPage = () => {
    useProtectedPage()
    return (
        <ErrorContainer>
            <ErrorImg src={erro}/>
            <Typography variant='h3' color='error'>
                Erro - Página não encontrada!
            </Typography>
        </ErrorContainer>
    )


}

export default ErrorPage;