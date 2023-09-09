import React, { useState, useEffect } from "react";
import { ShoppingOutlined, ShoppingFilled, HomeOutlined, HomeFilled, IdcardOutlined, IdcardFilled } from "@ant-design/icons";
import "./commonMobile.css"
import { Link } from "react-router-dom";

const BottomBar = () => {
    let [redButton, setRedButton] = useState('/m/home');
    
    useEffect(() => {
        setRedButton(window.location.pathname)
    }, [window.location.pathname])

    return (
        <>
        <ul className="bottom-bar">
            <li className={`bottom-bar-button ${redButton == '/m/shop' ? 'highlighted' : ''}`}><Link className="nav-link" to={'/m/shop'}>{redButton == '/m/shop' ? <ShoppingFilled className="bottom-bar-icon"/> : <ShoppingOutlined className="bottom-bar-icon"/>}</Link></li>
            <li className={`bottom-bar-button ${redButton == '/m/home' ? 'highlighted' : ''}`}><Link className="nav-link" to={'/m/home'}>{redButton == '/m/home' ? <HomeFilled className="bottom-bar-icon"/> : <HomeOutlined className="bottom-bar-icon"/>}</Link></li>
            <li className={`bottom-bar-button ${redButton == '/m/user' ? 'highlighted' : ''}`}><Link className="nav-link" to={'/m/user'}>{redButton == '/m/user' ? <IdcardFilled className="bottom-bar-icon"/> : <IdcardOutlined className="bottom-bar-icon"/>}</Link></li>
        </ul>
        </>
    )
}

export default BottomBar