import React, { useState, useEffect } from "react";
import { ShoppingOutlined, HomeOutlined, IdcardOutlined } from "@ant-design/icons";

const BottomBar = () => {
    
    return (
        <>
        <ul className="bottom-bar">
            <li className="bottom-bar-button"><ShoppingOutlined /></li>
            <li className="bottom-bar-button"><HomeOutlined /></li>
            <li className="bottom-bar-button"><IdcardOutlined /></li>
        </ul>
        </>
    )
}

export default BottomBar