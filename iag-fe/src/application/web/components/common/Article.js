import React from "react";
import LinkContainer from "./LinkContainer";
import { EllipsisOutlined, LikeOutlined, LikeFilled, DislikeFilled, DislikeOutlined, MailOutlined, ShareAltOutlined } from "@ant-design/icons";

const ArticleWeb = (props) => {
    const {headline, text, info, interaction} = props;
    // const {icon, author} = info;
    console.log(info)

    return (
        <div className="article">
            <div className="info-bar">
                <div className="icon"></div>
                <h2>Author Name</h2>
                <LinkContainer links={info.links} />
            </div>
            <div className="article-body">
                <h3 className="headline">This is a headline for important</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborum.</p>
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