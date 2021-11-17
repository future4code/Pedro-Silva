import React from "react";
import axios from "axios";
import styled from "styled-components";


export default class TelaUser extends React.Component {


    render() {
        return (
            <div>
                 <li>{this.props.list} <button onClick={this.props.botao}>X</button></li>
            </div>
        )
    }



}