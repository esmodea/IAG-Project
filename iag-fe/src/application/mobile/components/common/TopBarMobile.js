import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BigRedButton from "../../../common/BigRedButton";
import { TeamOutlined, FilterOutlined, LoginOutlined, LogoutOutlined, ShoppingCartOutlined, ShopOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./commonMobile.css"
import authors from "../../../mock-data/authorNames";
import { changeWriter } from "../../../../state/common/currentWriter";
import { current } from "@reduxjs/toolkit";

const TopBar = () => {
    let [displayFilter, setDisplayFilter] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    //THIS IS TO KEEP DISPLAYED BUTTONS CONSISTENT ON WRITER PAGES
    let currentWriter = false;
    if(location.pathname !== '/m/shop' && location.pathname !== '/m/user'){
        currentWriter = location.pathname.split('/')[location.pathname.split('/').length - 1];
    } else {
        currentWriter = false;
    }
    let [redButton, setRedButton] = useState(location.pathname);

    const handleFilter = () => {
        setDisplayFilter(!displayFilter);
    }
    
    useEffect(() => {
        setRedButton(window.location.pathname)
    }, [window.location.pathname])

    return (
        <>
        <ul className="top-bar">
            <li className={`top-bar-icon left-margin`}><Link to={'/m/home'}><img className="top-bar-icon" src="/logo192.png" /></Link></li>
            {redButton == '/m/home' || redButton ==`/m/${currentWriter}` ? <li className='positionary big-red-button right-margin'><BigRedButton onClick={handleFilter} text={[]} icons={[TeamOutlined, FilterOutlined]} />
                {displayFilter ? <div className="filter-list">
                    {authors.map((author) => {
                        return (
                            <Link onClick={() => {dispatch(changeWriter(author.id))}} to={`/m/${author.id}`}>
                                <button onClick={() => handleFilter()} className="author-link">
                                    <img src={author.icon ? author.icon : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fuser-png-icon-big-image-png-2240.png&f=1&nofb=1&ipt=cafcb6879a4aeebc9133d30076bb8a328ad5b65b3aa97b1b5b651a7dc7c6078d&ipo=images'} className="icon" />
                                    {author.name}
                                </button>
                            </Link>
                        )
                })}
                <div className="layout-div" />
            </div> : ''}
            </li> : ''}
            {redButton == '/m/user' ? <li className={`big-red-button right-margin`}><BigRedButton text={['Logout']} icons={[LogoutOutlined]} /></li> : ''}
            {redButton == '/m/shop' ? <li className={`big-red-button auto-left-margin right-margin`}><BigRedButton text={[]} icons={[ShoppingCartOutlined]} /></li> : ''}
            {redButton == '/m/shop' ? <li className={`big-red-button right-margin`}><BigRedButton text={[]} icons={[ShoppingOutlined, FilterOutlined]} /></li> : ''}
        </ul>
        </>
    )
}

export default TopBar