import { useHistory } from "react-router-dom";
import useProtectPage from "../../Hooks/useProtectPage";
import useForm from "../../Hooks/useForm";
import { urlLink } from "../../constants/url";
import axios from "axios";
import Header from "../../Components/Header";
import { ContainerFormCreate, DivFormCreate } from "./styles";



function CreateTripePage() {
    useProtectPage()

    const history = useHistory()
    const { form, onChangeInput, cleanInput } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: Number("")
    })

    const backToAdminHome = () => {
        history.goBack()
    }

    const backToHome = () => {
        history.push('/')
    }

    const backToLastPage = () => {
        history.goBack()
    }

    const createTrip = (e) => {
        e.preventDefault()
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }

        axios.post(`${urlLink}/trips`, body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                alert('Viagem criada!')
                cleanInput()

            })
            .catch((err) => {
                alert(`Erro! ${err.response}! Tente novamente!`)
            })

    }


    return (
        <div>
            <Header
                back={backToLastPage}
                home={backToHome} />

            <ContainerFormCreate>
                <h2> Crie sua Viagem </h2>


                <DivFormCreate>
                    <form onSubmit={createTrip}>
                        <input
                            placeholder="Nome da Viagem"
                            type={'text'}
                            name='name'
                            value={form.name}
                            onChange={onChangeInput}
                            required
                            pattern={'^.{5,}'}
                            title={'No m??nimo 5 caracteres'}
                        />

                        <select
                            name="planet"
                            value={form.planet}
                            onChange={onChangeInput}
                            required>

                            <option value="" disabled>Escolha um Planeta</option>
                            <option value="Merc??rio">Merc??rio</option>
                            <option value="V??nus">V??nus</option>
                            <option value="Terra">Terra</option>
                            <option value="Marte">Marte</option>
                            <option value="Jupiter">Jupiter</option>
                            <option value="Saturno">Saturno</option>
                            <option value="Urano">Urano</option>
                            <option value="Netuno">Netuno</option>
                            <option value="Plut??o">Plut??o</option>

                        </select>


                        <input
                            placeholder="Data"
                            type={'date'}
                            name='date'
                            value={form.date}
                            onChange={onChangeInput}
                            required
                        />

                        <input
                            placeholder="Descri????o"
                            type={'text'}
                            name="description"
                            value={form.description}
                            onChange={onChangeInput}
                            required
                            pattern={'^.{30,}'}
                            title={'Seu texto deve ter no m??nimo 30 caracteres'}
                        />

                        <input
                            placeholder="Dura????o em Dias"
                            type={'number'}
                            name='durationInDays'
                            value={form.durationInDays}
                            onChange={onChangeInput}
                            required
                            min='50'
                            title={'Viagens devem ter no m??nimo 50 dias de dura????o.'}
                        />

                        <button>Enviar</button>
                    </form>
                </DivFormCreate>
            </ContainerFormCreate>
        </div>
    );
}

export default CreateTripePage;