import React, { useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";

const LinkContainer = (props) => {
    const [displayMenu, setDisplayMenu] = useState(false)
    const {links} = props;

    const clickLinksMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <div className="citation-links">
            <EllipsisOutlined className="citation-button" onClick={clickLinksMenu} />
            <div className={`citation-menu ${displayMenu ? '' : 'hide'}`}>
                {links ? links.map((link, idx) => {return(<div className="citation-link" key={'1' + idx}><a target="_blank" rel="noreferrer" href={`https://${link}`}>{link}</a></div>)}) : ''}
            </div>
        </div>
    )
}

export default LinkContainer