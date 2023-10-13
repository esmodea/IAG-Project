import React from "react";
import BottomBar from "../components/common/BottomBarMobile";
import TopBar from "../components/common/TopBarMobile";
import MShopContent from "../components/Shop";

const ShopPageMobile = () => {
    return (
        <>
            <TopBar />
            <MShopContent />
            <BottomBar />
        </>
    )
} 

export default ShopPageMobile