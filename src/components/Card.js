import React from "react";



function Card(props) {
    // console.log("props: ", props)
    return (
    <div className="card">
        <div>
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Role:</strong> {props.role}</p>
        </div>
    </div>
    )
}

export default Card;