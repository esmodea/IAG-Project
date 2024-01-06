import React from "react";
import { useLocation } from "react-router";
import ArticleMobile from "../common/ArticleMobile";
import './writerpagemobile.css'

const MWriterContent = (props) => {
    const {articles} = props;
    const location = useLocation();
    const currentWriter = location.pathname.split('/')[location.pathname.split('/').length - 1];

    const sortDate = (a, b) => {
        let aDate = a.content.info.date.split('/').map((num) => {return +num;});
        let bDate = b.content.info.date.split('/').map((num) => {return +num;});
        if(aDate[2] >= bDate[2]){
            if(aDate[0] >= bDate[0]){
                if(aDate[1] >= bDate[1]){
                    if(aDate[1] > bDate[1]){
                        return -1;
                    } else {
                        return 0;
                    }
                } else {
                    return 1;
                }
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }

    const posts = articles.sort(sortDate);

    return (
        <div className="writer-mobile">
            {posts ? posts.map((article) => {if(article.content.info.id === currentWriter)return <ArticleMobile article={article} />}) : ''}
            <div className="spacing-div"></div>
        </div>
    )
}

export default MWriterContent;