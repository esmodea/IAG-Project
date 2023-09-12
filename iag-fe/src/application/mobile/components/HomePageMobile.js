import React from "react";
import BottomBar from "./common/BottomBarMobile";
import TopBar from "./common/TopBarMobile";
import MHomeContent from "../pages/Home";

const HomePageMobile = () => {
    return (
        <div id="MobileHomePage">
            <TopBar />
            <MHomeContent />
            <BottomBar />
        </div>
    )
} 

export default HomePageMobile