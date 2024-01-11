import React, { useState, useEffect } from "react";
import InteractionButton from "./InteractionButton";
import { MailOutlined, ShareAltOutlined } from "@ant-design/icons";

const InteractionRow = (props) => {
    const [copyBool, setCopyBool] = useState(true);
    const [copyClass, setCopyClass] = useState('hidden away');
    const {article} = props;
    // const [button, setButton] = useState(
    //     {
    //         like: false,
    //         dislike: false,
    //         mail: false
    //     }
    //     );
    
    useEffect(() => {
        copyBool ? setCopyClass('hidden away') : setCopyClass('visible');
        if(!copyBool)window.setTimeout(toggleCopyDialogue, 1000);
    }, [copyBool])

    const toggleCopyDialogue = () => {
        setCopyBool(!copyBool)   
    }

    const onChange = (buttonType) => {
        // if(buttonType === 'like'){
        //     setButton({like:!button.like, dislike:button.dislike, mail:button.mail})
        // }else if(buttonType === 'dislike'){
        //     setButton({like:button.like, dislike:!button.dislike, mail:button.mail})
        // }else if(buttonType === 'mail'){
        //     setButton({like:button.like, dislike:button.dislike, mail:!button.mail})
        // }
        if(buttonType === 'mail'){
            navigator.clipboard.writeText('editor@informationagegazette.com');
        } else if(buttonType === 'share'){
            navigator.clipboard.writeText(`Hey, check out this article: ${article.content.article.headline}. You can read more about that and other things at informationagegazette.com here are their sources for that headline: ${
                article.content.info.links.map((link) => {
                    return `${link}`
                })
            }`);
        };
    }

    return (
        <div className="interaction-row">
        <div className={`copy-dialogue ${copyClass}`}>Copied!</div>
            <InteractionButton className={'last-button'} Icon={MailOutlined} amount={'Email a comment!'} onClick={() => {
                onChange('mail')
                toggleCopyDialogue()
            }}/> 
            <InteractionButton Icon={ShareAltOutlined} amount={'Share'} onClick={() => {
                onChange('share')
                toggleCopyDialogue()
            }}/>
        </div>
    )
}

export default InteractionRow

