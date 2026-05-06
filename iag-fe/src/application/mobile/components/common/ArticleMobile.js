import React from "react";
import InfoRow from "../Home/InfoRow";
import InteractionRow from "../Home/InteractionRow";

const ArticleMobile = (props) => {
    const {article} = props;

    return (
        <div className="article-group">
            <InfoRow icon={article.content.info.icon} links={article.content.info.links} author={article.content.info.author} />
            <h3 className="headline">{article.content.article.headline}</h3>
            {article.content.article.image ? <img className="image" alt="from-article" src={`${article.content.article.image}`} /> : ''}
            <p className="date">{article.content.info.date}</p>
            {article.content.article.text.split('br/').map((text) => {
                return <p className="article">{text}</p>
            })}
            <InteractionRow article={article}/>
        </div>
    )
}

export default ArticleMobile