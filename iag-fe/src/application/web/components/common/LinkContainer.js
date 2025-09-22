import React, { useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import keysData from "../../../common/keys.json";

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
                {links ? links.map((link, idx) => {return(<div className="citation-link" key={Math.min((keysData.keys.components.link_container.min + idx * 2) - 1, keysData.keys.components.link_container.max)}><a target="_blank" rel="noreferrer" href={`https://${link}`}>{link}</a></div>)}) : ''}
            </div>
        </div>
    )
}

export default LinkContainer