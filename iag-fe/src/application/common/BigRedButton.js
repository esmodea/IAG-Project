import React, { useEffect } from "react";
import './common.css'

const BigRedButton = (props) => {
    let icons = props.icons.map((item) => {return(item)});
    let text = props.text.map((item) => {return(item)});
    useEffect(() => {
        // if(typeof props.icons == 'array'){ let iconArray = [...icons.icons]};
    }, [])
    return (
        <button className="big-red-button">
            {
                text[0] ? text.map((item, idx) => {return(<p key={'223' + idx} className="button-text">{`${item}`}</p>)}) : <></>
            }
            {
                icons[0] ? icons.map((Icon, idx) => {return(<Icon key={'123' + idx} />)}) : <></>
            }
        </button>
    )
} 

export default BigRedButton