import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import './writerpageweb.css';
import WritersWidget from "../common/WritersWidget";
import AboutWidget from "../common/AboutWidget";
import ArticleWeb from "../common/Article";
import articles from "../../../mock-data/homeArticles";
import authors from "../../../mock-data/authorNames";

const WWriterContent = () => {
    const writerState = useSelector((state) => state.currentWriter);
    const location = useLocation();
    

    return(
        <div className="writer-web">
            <Header />
            <div className="page-layout-div">
                <div className="page-left">
                    <WritersWidget />
                </div>
                <div className="page-center">
                    {articles.map((post) => {
                        const {article, info, interaction} = post.content;
                        const authorName = location.pathname.split('/')[location.pathname.split('/').length - 1];
                        if(info.id == authorName)return <ArticleWeb article={article} info={info} interaction={interaction} key={post.key} />;
                    })}
                    <div className="layout-div">how did you find this?</div>
                </div>
                <div className="page-right">
                    {authors.map((author) => {
                        if(author.id === location.pathname.split('/')[location.pathname.split('/').length - 1]) return <AboutWidget text={author.about} />;
                    })}
                </div>
            </div>
        </div>
    )
};

export default WWriterContent;