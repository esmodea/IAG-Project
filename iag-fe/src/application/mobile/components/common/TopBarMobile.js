import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import BigRedButton from "../../../common/BigRedButton";
import { TeamOutlined, FilterOutlined, LogoutOutlined, ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./commonMobile.css"
import authors from "../../../mock-data/authorNames";
import { changeWriter } from "../../../../state/common/currentWriter";

const TopBar = () => {
    let [displayFilter, setDisplayFilter] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    //THIS IS TO KEEP DISPLAYED BUTTONS CONSISTENT ON WRITER PAGES
    let currentWriter = false;
    if (location.pathname !== '/m/shop' && location.pathname !== '/m/user') {
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
    }, [])

    return (
        <>
            <ul className="top-bar">
                <li className={`top-bar-icon left-margin`}><Link to={'/m/home'}><img className="top-bar-icon" alt="main-logo-on-mobile" src="/logo192.png" /></Link></li>
                {redButton === '/m/home' || redButton !== `/m/${currentWriter}` ? <li className='positionary big-red-button right-margin'>
                    <BigRedButton onClick={handleFilter} text={[]} icons={[TeamOutlined, FilterOutlined]} />
                    {displayFilter ? <div className="filter-list">
                        {authors.map((author) => {
                            return (
                                <Link onClick={() => { dispatch(changeWriter(author.id)) }} to={`/m/${author.id}`}>
                                    <button onClick={() => handleFilter()} className="author-link override">
                                        <img src={author.icon !== undefined ? author.icon : '/assets/empty_icon.png'} alt="" className="icon override mobile-icon" />
                                        <div className="no-decor">
                                            {author.name}
                                        </div>
                                    </button>
                                </Link>
                            )
                        })}
                        <div className="layout-div" />
                    </div> : ''}
                </li> : ''}
                {redButton === '/m/user' ? <li className={`big-red-button right-margin`}>
                    <BigRedButton text={['Logout']} icons={[LogoutOutlined]} />
                </li> : ''}
                {redButton === '/m/shop' ? <li className={`big-red-button auto-left-margin right-margin`}>
                    <BigRedButton text={[]} icons={[ShoppingCartOutlined]} />
                </li> : ''}
                {redButton === '/m/shop' ? <li className={`big-red-button right-margin`}>
                    <BigRedButton text={[]} icons={[ShoppingOutlined, FilterOutlined]} />
                </li> : ''}
            </ul>
        </>
    )
}

export default TopBar