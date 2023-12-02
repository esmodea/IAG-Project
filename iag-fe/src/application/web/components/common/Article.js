import React, { useState, useEffect } from "react";
import LinkContainer from "./LinkContainer";
import { EllipsisOutlined, LikeOutlined, LikeFilled, DislikeFilled, DislikeOutlined, MailOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const ArticleWeb = (props) => {
    const {article, info, interaction} = props;
    const [copyState, setCopyState] = useState({animation: 'hide 1s infinite'});
    const [skewStyle, setSkewStyle] = useState('')

    useEffect(() => {
        switch(Math.ceil(Math.random() * 4)){
            case 1:
                setSkewStyle('skew-one')
                break;
            case 2:
                setSkewStyle('skew-two')
                break;
            case 3:
                setSkewStyle('skew-three')
            case 4: 
                setSkewStyle('skew-four') 
        }
    }, [skewStyle])

    const onClickMail = (e) => {
        navigator.clipboard.writeText('editor@informationagegazette.com');
        setCopyState({animation: 'show 1s 1'})
    };

    const onClickShare = (articleHeadline) => {
        navigator.clipboard.writeText(`Hey, have you heard about "${article.headline}"? You can read more about that and other things at informationagegazette.com here are their sources for that headline: ${
            info.links.map((link) => {
                return `${link}`
            })
        }`);
        setCopyState({animation: 'show 1s 1'})
    };

    return (
        <div className={`article ${skewStyle}`}>
            <div className="info-bar">
                <div className="icon"></div>
                <Link to={'/home'}><h2 className="author-name-article">{info.author}</h2></Link>
                <LinkContainer links={info.links}/>
            </div>
            <div className="article-body">
                {article.image ? <img src={article.image} className="article-image" /> : ''}
                <h3 className="headline">{article.headline}</h3>
                <p className="date">{info.date}</p>
                <p className="article-text">{article.text}</p>
            </div>
            <div className="interaction-bar">
                <div className="like-div">
                    <LikeOutlined />
                    <p>14k</p>
                    <DislikeOutlined />
                </div>
                {/* email is: editor@informationagegazette.com */}
                <button className="mail-button" onClick={() => {onClickMail();}}><MailOutlined /> Email a comment!</button>
                <button className="share-button" onClick={() => {onClickShare();}}><ShareAltOutlined /> Share</button>
                <div className="copied-div" onAnimationEnd={() => {setCopyState({animation: 'hide 1s infinite'})}} style={copyState}>Copied to clipboard!</div>
            </div>
        </div>
    )
};

export default ArticleWeb;