import React from "react";
import LinkContainer from "./LinkContainer";
import { EllipsisOutlined, LikeOutlined, LikeFilled, DislikeFilled, DislikeOutlined, MailOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ArticleWeb = (props) => {
    const {article, info, interaction} = props;
    // const {icon, author} = info;

    return (
        <div className="article">
            <div className="info-bar">
                <div className="icon"></div>
                <Link to={'/home'}><h2>{info.author}</h2></Link>
                <LinkContainer links={info.links}/>
            </div>
            <div className="article-body">
                {article.image ? <img src={article.image} className="article-image" /> : ''}
                <h3 className="headline">{article.headline}</h3>
                <p>{article.text}</p>
            </div>
            <div className="interaction-bar">
                <div className="like-div">
                    <LikeOutlined />
                    <p>14k</p>
                    <DislikeOutlined />
                </div>
                <button className="mail-button"><MailOutlined /> Email a comment!</button>
                <button className="share-button"><ShareAltOutlined /> Share</button>
            </div>
        </div>
    )
};

export default ArticleWeb;