import React from "react";
import BottomBar from "../components/common/BottomBarMobile";
import TopBar from "../components/common/TopBarMobile";
import MWriterContent from "../components/Writer";
import articles from "../../mock-data/homeArticles";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

const WriterPageMobile = () => {
    const writerState = useSelector((state) => state.currentWriter);
    const location = useLocation();

    return (
        <div id="MobileHomePage">
            <TopBar />
            <div className="writer-banner">
                <h1 className="writer-name">{location.pathname.split('/')[location.pathname.split('/').length - 1].split('-').join(' ')}</h1>
            </div>
            <MWriterContent articles={articles} writerName={writerState} />
            <BottomBar />
        </div>
    )
} 

export default WriterPageMobile;