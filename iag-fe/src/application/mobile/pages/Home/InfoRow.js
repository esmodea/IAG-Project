import React from "react";
import LinkContainer from "./LinkContainer";

const InfoRow = (props) => {
    const {icon, author, links} = props;
    console.log(icon, links, author)

    return (
        <div className="info-row">
            {icon ? <image src={icon} /> : <div className="fake-image" />}
            <h3 className="author-name">{author}</h3>
            {links ? <LinkContainer links={links} /> : <></>}
        </div>
    )
}

export default InfoRow