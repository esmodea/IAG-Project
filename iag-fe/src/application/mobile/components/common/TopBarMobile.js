import React, { useState, useEffect } from "react";
import BigRedButton from "../../../common/BigRedButton";
import { TeamOutlined, FilterOutlined, LoginOutlined, LogoutOutlined, ShoppingCartOutlined, ShopOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./commonMobile.css"

const TopBar = () => {
    let [redButton, setRedButton] = useState('/m/home');
    
    useEffect(() => {
        setRedButton(window.location.pathname)
    }, [window.location.pathname])

    return (
        <>
        <ul className="top-bar">
            <li className={`top-bar-icon left-margin`}><img className="top-bar-icon" src="/logo192.png" /></li>
            {redButton == '/m/home' ? <li className='big-red-button right-margin'><BigRedButton text={[]} icons={[TeamOutlined, FilterOutlined]} /></li> : ''}
            {redButton == '/m/user' ? <li className={`big-red-button right-margin`}><BigRedButton text={['Logout']} icons={[LogoutOutlined]} /></li> : ''}
            {redButton == '/m/shop' ? <li className={`big-red-button auto-left-margin right-margin`}><BigRedButton text={[]} icons={[ShoppingCartOutlined]} /></li> : ''}
            {redButton == '/m/shop' ? <li className={`big-red-button right-margin`}><BigRedButton text={[]} icons={[ShoppingOutlined, FilterOutlined]} /></li> : ''}
        </ul>
        </>
    )
}

export default TopBar