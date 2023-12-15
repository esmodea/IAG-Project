import React from "react";
import ArticleMobile from "../common/ArticleMobile";
import './homepagemobile.css'

const MHomeContent = (props) => {
    const {articles} = props;

    return (
        <div className="home-mobile">
        {articles ? articles.map((article) => {return <ArticleMobile article={article} />}) : ''}
        {/* <div className="spacing-div"></div> */}
        </div>
    )
}

export default MHomeContent