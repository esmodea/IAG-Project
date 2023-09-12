import React from "react";
import BottomBar from "./common/BottomBarMobile";
import TopBar from "./common/TopBarMobile";
import MHomeContent from "../pages/Home";
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