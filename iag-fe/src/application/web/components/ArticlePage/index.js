import React from "react";
import {  useLocation } from "react-router-dom";
import Header from "../common/Header";
import './articlepageweb.css';
import WritersWidget from "../common/WritersWidget";
import AboutWidget from "../common/AboutWidget";
import ArticleWeb from "../common/Article";
import keysData from "../../../common/keys.json";
import articles from "../../../mock-data/homeArticles";
import authors from "../../../mock-data/authorNames";
import HeadlineBanner from "./ArticleBanner.js";

const WArticleContent = () => {
    const location = useLocation();

    const articleKey = location.pathname.split('/')[location.pathname.split('/').length - 1];
    const post = articles.map((post) => {
        console.log(post, (+post.key === +articleKey));
        if(+post.key === +articleKey)return post;
    }).filter((post) => post != undefined)[0];
    console.log(post);
    console.log(articleKey);

    return(
        <div className="article-web">
            <Header />
            <div className="page-layout-div">
                <div className="page-left">
                    <WritersWidget />
                </div>
                <div className="banner-layout-div">
                    <div className="page-banner">
                        <HeadlineBanner headline={post.content.article.headline}/>
                    </div>
                    <div className="page-center-right">
                        <div className={`page-center`}>
                            <div className="layout-div"></div>
                            {/* {articles.map((post, idx) => {
                                const {article, info, interaction} = post.content;
                                const articleKey = location.pathname.split('/')[location.pathname.split('/').length - 1];
                                if(+post.key === +articleKey)return ;
                                return '';
                            })} */}
                            {
                            
                            post != undefined ? <ArticleWeb article={post.content.article} info={post.content.info} interaction={post.content.interaction} id={post.key} displayHeadline={false} /> : ''
                            }
                            <div className="layout-div">how did you find this?</div>
                        </div>
                        <div className="page-right">
                            {articles.map((post, idx) => {
                                const {info,} = post.content;
                                const articleKey = location.pathname.split('/')[location.pathname.split('/').length - 1];
                                if(+post.key === +articleKey){
                                    return authors.map((author, idx) => {
                                        if(author.id === info.id) return <AboutWidget authorName={author.name} text={author.about} key={Math.min(((keysData.keys.components.writer_page.min + idx) * 2) - 1, keysData.keys.components.writer_page.max)} />;
                                        return '';
                                    })
                                }
                                return '';
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WArticleContent;