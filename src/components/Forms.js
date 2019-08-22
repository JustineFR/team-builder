import React, { useState } from "react";

function Form(props) {

    const [input, setInput] = useState({name: "", email:"", role:""})

    return (
        <div>
            <form className="form">
                <input 
                type="text"
                name="name"
                placeholder="Name">
                </input>
                <input 
                type="text"
                name="email"
                placeholder="Email">
                </input>
                <input 
                type="text"
                name="role"
                placeholder="Role">
                </input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;