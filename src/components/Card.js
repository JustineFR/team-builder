import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    border: 1px solid black;
    background-color: #F3AAF6;
    width: 200px;
    margin: 20px;
`;



function Card(props) {
    // console.log("props: ", props)
    return (
    <CardStyle>
        <div>
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Role:</strong> {props.role}</p>
        </div>
    </CardStyle>
    )
}

export default Card;