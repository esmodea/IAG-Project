import React from "react";
import BigRedButton from "../../../common/BigRedButton";
import { LoginOutlined } from "@ant-design/icons";
import './commonWeb.css'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <Link to={'/home'} className="icon"></Link>
            <BigRedButton icons={[LoginOutlined]} text={['Login']} className="login-button" />
        </div>
    )
};

export default Header;