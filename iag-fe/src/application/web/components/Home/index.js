import React from "react";
import Header from "../common/Header";
import './homepageweb.css'
import WritersWidget from "../common/WritersWidget";

const WHomeContent = () => {

    return(
        <div className="home-web">
            <Header />
            <div className="page-layout-div">
                <div className="page-left">
                    <WritersWidget />
                </div>
                <div className="page-center">

                </div>
                <div className="page-right">

                </div>
            </div>
        </div>
    )
};

export default WHomeContent;