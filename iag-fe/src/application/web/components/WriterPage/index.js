import React from "react";
import Header from "../common/Header";
import './writerpageweb.css'
import WritersWidget from "../common/WritersWidget";
import AboutWidget from "../common/AboutWidget";
import ArticleWeb from "../common/Article";

const WWriterContent = () => {

    // const state = useSelector((state) => state.currentWriter)

    return(
        <div className="home-web">
            <Header />
            <div className="page-layout-div">
                <div className="page-left">
                    <WritersWidget />
                </div>
                <div className="writer-body">
                    <div className="writer-header">
                        <div className="icon"></div>
                        <h1>Author Name</h1>
                    </div>
                    <div className="page-center">
                        <ArticleWeb />
                    </div>
                    <div className="page-right">
                        <AboutWidget text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WWriterContent;