import React from "react";

const InteractionButton = (props) => {
    const {onClick, className, Icon, amount} = props;
    console.log(amount)

    return (
        <div className={`interaction-group ${className ? className : ''}`}>
            <button onClick={onClick} className="interaction-button">
                {Icon ? <Icon /> : <></>}
            </button>
            {amount ? <p className="interaction-amount">{`${amount}`}</p> : <p style={{display: "none"}}></p>}
        </div>
    )
};

export default InteractionButton;