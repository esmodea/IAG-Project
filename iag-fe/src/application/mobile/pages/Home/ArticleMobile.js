import React from "react";
import InfoRow from "./InfoRow";

const ArticleMobile = (props) => {
    const {article} = props;

    return (
        <>
            <InfoRow icon={article.content.info.icon} links={article.content.info.links} author={article.content.info.author} />
        </>
    )
}

export default ArticleMobile