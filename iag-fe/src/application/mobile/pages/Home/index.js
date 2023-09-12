import React from "react";

const MHomeContent = (props) => {
    const {articles} = props;

    return (
        <>
        {articles ? articles.map(() => {}) : ''}
        </>
    )
}

export default MHomeContent