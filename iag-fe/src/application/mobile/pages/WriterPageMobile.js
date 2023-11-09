import React from "react";
import BottomBar from "../components/common/BottomBarMobile";
import TopBar from "../components/common/TopBarMobile";
import MWriterContent from "../components/Writer";
import articles from "../../mock-data/homeArticles";
import { useDispatch, useSelector } from "react-redux";

const WriterPageMobile = () => {
    const writerState = useSelector((state) => state.currentWriter);

    return (
        <div id="MobileHomePage">
            <TopBar />
            <MWriterContent articles={articles} writerName={writerState} />
            <BottomBar />
        </div>
    )
} 

export default WriterPageMobile;