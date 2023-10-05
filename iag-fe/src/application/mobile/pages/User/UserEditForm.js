import React, { useState } from "react";

const UserEditForm = (props) => {
    let [userState, setUserState] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <input className="username form-text" type="text"></input>
            <input className="email form-text" type="text"></input>
            <input className="password form-text" type="password"></input>
            <button></button>
        </form>
    )
}

export default UserEditForm;