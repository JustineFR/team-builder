import React, { useState } from "react";

function Form(props) {console.log("props: ", props)
    // const addMember = props.addMember;
    const [input, setInput] = useState({name: "", email:"", role:""})

    const changeHandler = event => { 
        setInput({ ...input, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
             ...input
        }
        props.addMember(newMember);
        setInput({name: "", email:"", role:""});
    }

    return (
        <div>
            <form onSubmit={submitForm}   className="form">
                <input 
                type="text"
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={changeHandler}>
                </input>
                <input 
                type="text"
                name="email"
                placeholder="Email"
                value={input.email}
                onChange={changeHandler}>
                </input>
                <input 
                type="text"
                name="role"
                placeholder="Role"
                value={input.role}
                onChange={changeHandler}>
                </input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form;