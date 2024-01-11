import React, { useState } from "react";
import InteractionButton from "./InteractionButton";
import { MailOutlined, ShareAltOutlined } from "@ant-design/icons";

const InteractionRow = (props) => {
    // const {article} = props;
    const [button, setButton] = useState(
        {
            like: false,
            dislike: false,
            mail: false
        }
        );

    const onChange = (buttonType) => {
        if(buttonType === 'like'){
            setButton({like:!button.like, dislike:button.dislike, mail:button.mail})
        }else if(buttonType === 'dislike'){
            setButton({like:button.like, dislike:!button.dislike, mail:button.mail})
        }else if(buttonType === 'mail'){
            setButton({like:button.like, dislike:button.dislike, mail:!button.mail})
        }
    }

    return (
        <div className="interaction-row">
        <InteractionButton onClick={() => {onChange('mail')}} className={'last-button'} Icon={MailOutlined} amount={'Email a comment!'}/> <InteractionButton Icon={ShareAltOutlined} amount={'Share'} />
        </div>
    )
}

export default InteractionRow