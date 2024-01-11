import React from "react";
import {  useLocation } from "react-router-dom";
import Header from "../common/Header";
import './writerpageweb.css';
import WritersWidget from "../common/WritersWidget";
import AboutWidget from "../common/AboutWidget";
import ArticleWeb from "../common/Article";
import articles from "../../../mock-data/homeArticles";
import authors from "../../../mock-data/authorNames";
import WriterBanner from "./WriterBanner";

const WWriterContent = () => {
    const location = useLocation();

    const sortDate = (a, b) => {
        let aDate = a.content.info.date.split('/').map((num) => {return +num;});
        let bDate = b.content.info.date.split('/').map((num) => {return +num;});
        if(aDate[2] >= bDate[2]){
            if(aDate[0] >= bDate[0]){
                if(aDate[1] >= bDate[1]){
                    if(aDate[1] > bDate[1]){
                        return -1;
                    } else {
                        return 0;
                    }
                } else {
                    return 1;
                }
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }

    const posts = articles.sort(sortDate);
    

    return(
        <div className="writer-web">
            <Header />
            <div className="page-layout-div">
                <div className="page-left">
                    <WritersWidget />
                </div>
                <div className="banner-layout-div">
                    <div className="page-banner">
                        <WriterBanner authorName={authors.map((author) => {
                            if(author.id === location.pathname.split('/')[location.pathname.split('/').length - 1]) return author.name;
                            return '';
                        })} />
                    </div>
                    <div className="page-center-right">
                        <div className={`page-center`}>
                            <div className="layout-div"></div>
                            {posts.map((post) => {
                                const {article, info, interaction} = post.content;
                                const authorName = location.pathname.split('/')[location.pathname.split('/').length - 1];
                                if(info.id === authorName)return <ArticleWeb article={article} info={info} interaction={interaction} id={+post.key} key={+post.key}/>;
                                return '';
                            })}
                            <div className="layout-div">how did you find this?</div>
                        </div>
                        <div className="page-right">
                            {authors.map((author) => {
                                if(author.id === location.pathname.split('/')[location.pathname.split('/').length - 1]) return <AboutWidget text={author.about} />;
                                return '';
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WWriterContent;