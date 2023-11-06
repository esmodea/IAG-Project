import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import './homepageweb.css'
import WritersWidget from "../common/WritersWidget";
import AboutWidget from "../common/AboutWidget";
import ArticleWeb from "../common/Article";
import articles from "../../../mock-data/homeArticles";

const WHomeContent = () => {
    const writerState = useSelector((state) => state.currentWriter)

    return(
        <div className="home-web">
            <Header />
            <div className="page-layout-div">
                <div className="page-left">
                    <WritersWidget />
                </div>
                <div className="page-center">
                    {articles.map((post) => {
                        const {article, info, interaction} = post.content;
                        return <ArticleWeb article={article} info={info} interaction={interaction} key={post.key} />;
                    })}
                    <div className="layout-div">how did you find this?</div>
                </div>
                <div className="page-right">
                    <AboutWidget text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </div>
            </div>
        </div>
    )
};

export default WHomeContent;