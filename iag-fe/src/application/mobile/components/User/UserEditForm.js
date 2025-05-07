import React, { useState } from "react";
// import BigRedButton from "../../../common/BigRedButton";

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
            <h3 className="form-title">Edit Your Info</h3>
            <label>Username</label>
            <input className="username form-text" type="text"></input>
            <label>Email</label>
            <input className="email form-text" type="text"></input>
            <label>Password</label>
            <input className="password form-text" type="password"></input>
            <BigRedButton className="form-button" text={['Save']} icons={[]} />
        </form>
    )
}

export default UserEditForm;