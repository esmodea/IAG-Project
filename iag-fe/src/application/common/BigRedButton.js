import React from "react";
import './common.css'

const BigRedButton = (props) => {
    let icons = props.icons.map((item) => {return(item)});
    let text = props.text.map((item) => {return(item)});

    return (
        <button className="big-red-button">
            {
                text[0] ? text.map((item, idx) => {return(<p key={'223' + idx} className="button-text">{`${item}`}</p>)}) : <></>
            }
            {
                icons[0] ? icons.map((Icon, idx) => {return(<Icon key={'123' + idx} className="button-icon" />)}) : <></>
            }
        </button>
    )
}

export default BigRedButton