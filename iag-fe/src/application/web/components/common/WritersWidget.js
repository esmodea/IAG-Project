import React from "react";
import authors from "../../../mock-data/authorNames";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeWriter } from "../../../../state/common/currentWriter";


const WritersWidget = (props) => {
    const writerState = useSelector((state) => state.currentWriter)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (name) => {
        dispatch(changeWriter({name: name}));
        navigate(`/writer/${name}`)
    }

    return(
        <div className="writer-widget">
            <h5 className="writer-list-title">Writers</h5>
            <ul className="writer-list">
                {authors.map((author) => {
                    return(
                        <li className="writer">
                            <div className="icon"></div>
                            <button onClick={() => {handleClick(author.id)}} className="name"> {author.name} </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default WritersWidget;