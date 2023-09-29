import React from "react";
import InfoRow from "./InfoRow";
import InteractionRow from "./InteractionRow";

const ArticleMobile = (props) => {
    const {article} = props;

    return (
        <div className="article-group">
            <InfoRow icon={article.content.info.icon} links={article.content.info.links} author={article.content.info.author} />
            <h3 className="headline">{article.content.article.headline}</h3>
            <p className="article">{article.content.article.text}</p>
            <InteractionRow article={article}/>
        </div>
    )
}

export default ArticleMobile