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
import keysData from "../../../common/keys.json";
import EmptyAuthorPage from "./EmptyAuthorPage";

const WWriterContent = () => {
    const location = useLocation();

    const sortDate = (a, b) => {
        let aDate
        let bDate
        if(a.content.info.date !== undefined) {
            aDate = a.content.info.date.split('/').map((num) => {return +num;});
            bDate = b.content.info.date.split('/').map((num) => {return +num;});
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
        };
    }
    let posts = articles.sort(sortDate);
    console.log(location.pathname.split('/')[location.pathname.split('/').length - 1]);
    posts = posts.filter((post,) => post.content.info.id === location.pathname.split('/')[location.pathname.split('/').length - 1]);
    console.log(posts);
    const noPosts = posts.length === 0;
    if(posts.length === 0){
        posts = [<EmptyAuthorPage key={keysData.keys.components.writer_page.max} />];
    } else {
        posts = posts.map((post, idx) => {
            const {article, info, interaction} = post.content;
            return  <ArticleWeb article={article} info={info} interaction={interaction} id={post.key} key={Math.min(keysData.keys.components.writer_page.min + idx * 2, keysData.keys.components.writer_page.max)}/>
        });
    };

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
                            {posts}
                            <div className="layout-div">how did you find this?</div>
                        </div>
                        <div className="page-right">
                            {authors.map((author, idx) => {
                                if(author.id === location.pathname.split('/')[location.pathname.split('/').length - 1] && !noPosts) return <AboutWidget text={author.about} key={Math.min((keysData.keys.components.writer_page.min + idx * 2) - 1, keysData.keys.components.writer_page.max)} />;
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