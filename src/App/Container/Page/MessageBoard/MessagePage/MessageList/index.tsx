import React from "react";
import Style from "./MessageList.module.less";
import BoxScrollVisable from "@/component/BoxScrollVisable";
import MessageItem from "./MessageItem";
import type { MessageItemType } from "@/Types/MessageBoardType";
import { nanoid } from "@reduxjs/toolkit";
interface Props {
    MessageList: MessageItemType[];
}

const index: React.FC<Props> = ({ MessageList }) => {
    return (
        <div className={`${Style.MessageList}`}>
            {MessageList.map((item) => (
                <BoxScrollVisable key={nanoid()}>
                    <MessageItem {...item} key={nanoid()} />
                </BoxScrollVisable>
            ))}
        </div>
    );
};

export default index;
