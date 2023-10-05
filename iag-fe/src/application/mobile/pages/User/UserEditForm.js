import React, { useState } from "react";
import BigRedButton from "../../../common/BigRedButton";

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
            <BigRedButton className="form-button" text={['Save']} icons={[]} />
        </form>
    )
}

export default UserEditForm;