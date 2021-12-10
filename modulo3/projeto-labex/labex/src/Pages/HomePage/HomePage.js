import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import { ContainerHome, ContainerTextImg } from "./styles";

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
                        <h2>Conheça a LabeX</h2>
                        <p> Viaje com a LabeX e tenho uma experiência incrível!
                            <p>Possuimos incríveis viagens para todos os Planetas do Sistema solar!</p>
                            <p>Ta esperando o que para viagar com a gente?</p>
                        </p>
                    </div>
                    <iframe
                        src="https://giphy.com/embed/26BRLblDUw8VAhoFq"
                        // width="380"
                        // height="380"
                        frameBorder="0"></iframe>
                </ContainerTextImg>

                <div>
                <button onClick={goToListTrips}>Venha viajar!</button>
                <button onClick={goToAdmAreaOrLogin}>Área do Administrador</button>
                </div>
            </ContainerHome>
        </div>
    );
}

export default HomePage;