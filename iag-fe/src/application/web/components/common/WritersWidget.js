import React from "react";
import authors from "../../../mock-data/authorNames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeWriter } from "../../../../state/common/currentWriter";


const WritersWidget = (props) => {
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
                {authors.map((author, idx) => {
                    return(
                        <li key={idx * 13245} className="writer">
                            <div><div className="icon"></div></div> {/* a spacing div around the icon */}
                            <button onClick={() => {handleClick(author.id)}} className="name"> {author.name} </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default WritersWidget;