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
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <button></button>
        </form>
    )
}

export default UserEditForm;