import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 15px;
width: 25%;
padding: 10px 10px;
border-radius: 5px;
box-shadow: 0px 0px 2px 2px;


b{
    color: purple
}
`

const CardListAdm = (props) => {

    return (
        <CardContainer>
            <p><b> {props.trip.name} </b></p>
            <button onClick={props.deleteTrip}>Delete</button>
        </CardContainer>
    )
}

export default CardListAdm