import React from "react";
import BottomBar from "../components/common/BottomBarMobile";
import TopBar from "../components/common/TopBarMobile";
import MHomeContent from "../components/Home";
import articles from "../../mock-data/homeArticles";

const HomePageMobile = () => {
    return (
        <div id="MobileHomePage">
            <TopBar />
            <MHomeContent articles={articles} />
            <BottomBar />
        </div>
    )
} 

export default HomePageMobile