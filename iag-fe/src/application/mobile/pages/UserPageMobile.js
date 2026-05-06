import React from "react";
import BottomBar from "../components/common/BottomBarMobile";
import TopBar from "../components/common/TopBarMobile";
import MUserContent from "../components/User";

const UserPageMobile = () => {
    return (
        <>
            <TopBar />
            <MUserContent />
            <BottomBar />
        </>
    )
} 

export default UserPageMobile