import React from "react";
import ArticleMobile from "./ArticleMobile";
import './homepagemobile.css'

const MHomeContent = (props) => {
    const {articles} = props;

    return (
        <div className="home-mobile">
        {articles ? articles.map((article) => {return <ArticleMobile article={article} />}) : ''}
        </div>
    )
}

export default MHomeContent