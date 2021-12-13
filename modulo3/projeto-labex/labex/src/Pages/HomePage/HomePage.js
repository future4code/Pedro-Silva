import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import { ContainerButton, ContainerHome, ContainerTextImg } from "./styles";

function HomePage() {
    const history = useHistory()

    const goToListTrips = () => {
        history.push('/trips/list')
    }

    const goToAdmAreaOrLogin = () => {
        history.push('/admin/trips/list')
    }

    const backToHome = () => {
        history.push('/')
    }

    const backToLastPage = () => {
        history.goBack()
    }


    return (
        <div>
            <Header
                back={backToLastPage}
                home={backToHome} />

            <ContainerHome>
                <ContainerTextImg>
                    <div>
                        <h2>Conheça o espaço com a LabeX</h2>
                        <p> Viaje conosco e tenho uma experiência incrível!
                            <p>Possuimos incríveis viagens para todos os Planetas do Sistema solar!</p>
                            <p>Está esperando o que para viajar com a gente?</p>
                        </p>
                    </div>
                    <iframe
                        src="https://giphy.com/embed/MXQnyEQwBJ6eTj90L5"
                        // width="380"
                        // height="380"
                        frameBorder="0"></iframe>
                </ContainerTextImg>

                <ContainerButton>
                <button onClick={goToListTrips}>Venha viajar!</button>
                <button onClick={goToAdmAreaOrLogin}>Área do Administrador</button>
                </ContainerButton>
            </ContainerHome>
        </div>
    );
}

export default HomePage;