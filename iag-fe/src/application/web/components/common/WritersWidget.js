import React from "react";

const writers = [
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    },
    {
        name: 'Author Name',
        icon: '',
    }
]

const WritersWidget = (props) => {

    return(
        <div className="writer-widget">
            <h5 className="writer-list-title">Writers</h5>
            <ul className="writer-list">
                {writers.map((writer) => {
                    return(
                        <li className="writer">
                            <div className="icon"></div>
                            <button className="name"> {writer.name} </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default WritersWidget;