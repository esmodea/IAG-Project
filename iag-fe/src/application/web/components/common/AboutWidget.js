import React from "react";

const AboutWidget = (props) => {
    const { text } = props;

    return (
        <div className="about-widget">
            <h3 className="about-title">About</h3>
            <p className="about-text">{text}</p>
        </div>
    )
};

export default AboutWidget;