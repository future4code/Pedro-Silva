import styled from "styled-components";
import moment from "moment";

const CardContainer = styled.div`
margin-top: 30px;
margin-bottom: 15px;
width: 35%;
padding: 10px 10px;
border-radius: 5px;
box-shadow: 0px 0px 2px 2px;
background-color: #6E2594;
box-shadow: rgba(236, 212, 68) 1px 1px 5px 5px;



b{
    color: #ECD444;
}

p{
    color: white;
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