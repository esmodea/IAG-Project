import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowDownOutlined } from "@ant-design/icons";

const WriterBanner = (props) => {
    let authorName;
    if(props.authorName)authorName = props.authorName;
    const [isHidden, setIsHidden] = useState(false);
    const [hideScroll, setHideScroll] = useState(false);
    const [posTop, setPosTop] = useState(0)

    useEffect(() => {
        document.onkeydown = (e) => {
            if(e.key === 'f'){
                console.log(document.getElementsByClassName('writer-banner')[0].className);
            }
        }
        let scrollingDiv = document.getElementsByClassName('page-center')[0];
        if(scrollingDiv.scrollTop > 0){
            setIsHidden(true);
            setTimeout(() => document.getElementsByClassName('page-center')[0].style.setProperty(`--overflow-width`, `auto`), 520);
        };
        scrollingDiv.onscroll = () => {
            scrollingDiv = document.getElementsByClassName('page-center')[0];
            console.log(scrollingDiv.scrollTop, posTop);
            if(scrollingDiv.scrollTop > posTop && !isHidden) {
                setIsHidden(true);
                setHideScroll(true);
                setPosTop(0);
                setTimeout(() => document.getElementsByClassName('page-center')[0].style.setProperty(`--overflow-width`, `auto`), 520)
            } else if(scrollingDiv.scrollTop <= posTop && isHidden) {
                setPosTop(scrollingDiv.scrollTop);
                setIsHidden(false);
                document.getElementsByClassName('page-center')[0].style.setProperty(`--overflow-width`, `none`)
            }
        }
    }, [isHidden, posTop])

    return (
        <>
        <div id="banner" className={`writer-banner ${isHidden ? 'hide-banner' : ''} ${hideScroll ? 'hide-scroll' : ''}`}>
            <div className="icon"></div>
            <div className="icon-bar"></div>
            <h1 className="author-name">{authorName}</h1>
        </div>
        <p className={`scroll-notif ${hideScroll ? 'hide-scroll' : ''}`} style={{fontSize: '2rem'}}>Scroll Down For Articles! <br /> <ArrowDownOutlined style={{fontSize: '2rem'}} /></p>
        </>
    )
}

export default WriterBanner;