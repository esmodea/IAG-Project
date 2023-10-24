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
            <h5>Writers</h5>
            <ul>
                {writers.map((writer) => {
                    return(
                        <li>
                            <div className="icon"></div>
                            <h6 className="name"> {writer.name} </h6>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default WritersWidget;