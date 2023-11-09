import React from "react";
import { useLocation } from "react-router";
import ArticleMobile from "../common/ArticleMobile";
import './writerpagemobile.css'

const MWriterContent = (props) => {
    const {articles} = props;
    const location = useLocation();
    const currentWriter = location.pathname.split('/')[location.pathname.split('/').length - 1];

    return (
        <div className="home-mobile">
        {articles ? articles.map((article) => {if(article.content.info.id === currentWriter)return <ArticleMobile article={article} />}) : ''}
        <div className="spacing-div"></div>
        </div>
    )
}

export default MWriterContent;