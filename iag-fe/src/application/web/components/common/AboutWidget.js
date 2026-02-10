import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ArrowDownOutlined } from "@ant-design/icons";

const AboutWidget = (props) => {
    const { text, authorName } = props;
    const location = useLocation(); 
    const [isHidden, setIsHidden] = useState(false);
    const [hideScroll, setHideScroll] = useState(false);
    const [posTop, setPosTop] = useState(0)

    useEffect(() => {
        document.onkeydown = (e) => {
            if(e.key === 'f'){
                console.log(document.getElementsByClassName('web-writer-banner')[0].className);
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
        <div>
            <div className="about-widget">  
                <h3 className="about-title">{location.pathname === '/home' ? 'About' : 'About This Author'}</h3>
                <p className="about-text">{text}</p>
            </div>
            {location.pathname.split('/')[location.pathname.split('/').length - 2] == 'writer' ? <p className={`scroll-notif ${hideScroll ? 'hide-scroll' : ''}`} style={{fontFamily: 'var(--main-text-family)', fontSize: '2.25rem', paddingTop: '1rem'}}>Scroll down for more articles! <br /> <ArrowDownOutlined style={{fontSize: '2rem'}} /></p> : ''}
        </div>
    )
};

export default AboutWidget;