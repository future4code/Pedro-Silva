import styled from "styled-components";
import moment from "moment";

const CardContainer = styled.div`
margin-top: 15px;
width: 50%;
padding: 10px 10px;
border-radius: 5px;
box-shadow: 0px 0px 2px 2px;


b{
    color: purple
}
`

const CardListTrips = (props) => {

    return (
        <CardContainer>
            <p><b> Nome:</b> {props.trip.name} </p>
            <p><b> Descrição:</b> {props.trip.description} </p>
            <p><b> Planeta:</b> {props.trip.planet} </p>
            <p><b> Duração: </b> {props.trip.durationInDays} </p>
            <p><b> Data: </b> {moment(props.trip.date).format('DD/MM/YYYY')} </p>
        </CardContainer>
    )
}

export default CardListTrips