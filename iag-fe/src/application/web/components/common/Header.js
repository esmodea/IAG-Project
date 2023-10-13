import React from "react";
import BigRedButton from "../../../common/BigRedButton";
import { LoginOutlined } from "@ant-design/icons";

const Header = () => {

    return (
        <div className="header">
            <div className="icon"></div>
            <BigRedButton icons={[LoginOutlined]} text={['Login']} className="login-button" />
        </div>
    )
};

export default Header;