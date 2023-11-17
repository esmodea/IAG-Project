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
                <div className="banner-layout-div">
                    <div className="page-center-right">
                        <div className="page-center">
                            {articles.map((post) => {
                                const {article, info, interaction} = post.content;
                                return <ArticleWeb article={article} info={info} interaction={interaction} key={post.key} />;
                            })}
                            <div className="layout-div">how did you find this?</div>
                        </div>
                        <div className="page-right">
                            <AboutWidget text="Democracy, Freedom, and Human Rights are under attack and in danger. The Information Age Gazzette
connects the reader with the facts and arguments that they need in order to fight effectively for the
future of our world." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WHomeContent;