import React from "react";
import ArticleMobile from "../common/ArticleMobile";
import './homepagemobile.css'

const MHomeContent = (props) => {
    const { articles } = props;

    // const sortDate = (a, b) => {
    //     let aDate
    //     let bDate
    //     if (a.content.info.date !== undefined) {
    //         aDate = a.content.info.date.split('/').map((num) => { return +num; });
    //         bDate = b.content.info.date.split('/').map((num) => { return +num; });
    //         if (aDate[2] >= bDate[2]) {
    //             if (aDate[0] >= bDate[0]) {
    //                 if (aDate[1] >= bDate[1]) {
    //                     if (aDate[1] > bDate[1]) {
    //                         return -1;
    //                     } else {
    //                         return 0;
    //                     }
    //                 } else {
    //                     return 1;
    //                 }
    //             } else {
    //                 return 1;
    //             }
    //         } else {
    //             return 1;
    //         }
    //     };
    // }

    const posts = articles.sort((a, b) => b.key - a.key);

    return (
        <div className="home-mobile">
            {posts ? posts.map((article) => { return <ArticleMobile article={article} /> }) : ''}
            {/* <div className="spacing-div"></div> */}
        </div>
    )
}

export default MHomeContent