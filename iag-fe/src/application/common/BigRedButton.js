import React from "react";
import './common.css'
import keysData from '../common/keys.json';

const BigRedButton = (props) => {
    let icons = props.icons.map((item) => {return(item)});
    let text = props.text.map((item) => {return(item)});
    let {onClick} = props;
    let className = typeof props.className === 'string' ? `${props.className} big-red-button` : 'big-red-button';

    return (
        <button onClick={() => {if(onClick)onClick();}} className={className}>
            {
                text[0] ? text.map((item, idx) => {return(<p key={Math.min((keysData.keys.components.big_red_button.min + idx * 2) - 1, keysData.keys.components.big_red_button.max)} className="button-text">{`${item}`}</p>)}) : <></>
            }
            {
                icons[0] ? icons.map((Icon, idx) => {return(<Icon key={Math.min(keysData.keys.components.big_red_button.min + idx * 2, keysData.keys.components.big_red_button.max)} className="button-icon" />)}) : <></>
            }
        </button>
    )
} 

export default BigRedButton