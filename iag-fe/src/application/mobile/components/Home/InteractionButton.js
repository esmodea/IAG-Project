import React from "react";
import './homepagemobile.css';

const InteractionButton = (props) => {
    const {onClick, className, Icon, amount} = props;
    console.log(amount)

    return (
        <div className={`interaction-group ${className ? className : ''}`}>
            <button onClick={onClick} className="interaction-button">
                {Icon ? <Icon className={'interaction-icon'} /> : <></>}
            {amount ? <p className="interaction-amount">{`${amount}`}</p> : <p style={{display: "none"}}></p>}
            </button>
        </div>
    )
};

export default InteractionButton;