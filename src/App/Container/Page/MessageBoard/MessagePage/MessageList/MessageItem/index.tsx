import React from "react";
import Style from "./MessageItem.module.less";
import src from "/InformationLIstImage/test.png";
import type { MessageItemType } from "@/Types/MessageBoardType";

const index: React.FC<MessageItemType> = ({ nickName, content }) => {
    return (
        <div className={`${Style.MessageItem}`}>
            <img src={src} alt="" />
            <div className={`${Style.Content}`}>
                <span>{nickName}</span>
                <div className={`${Style.Text}`}>{content}</div>
            </div>
        </div>
    );
};

export default index;
