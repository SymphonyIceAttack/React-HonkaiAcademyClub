import React from "react";
import Style from "./MessageBoard.module.less";
import MessagePage from "./MessagePage";
import type { MessagePageType } from "@/Types/MessageBoardType";
import { nanoid } from "nanoid";
const index = () => {
    const MessagePageList: MessagePageType[] = [
        {
            title: "title1",
            MessageList: [
                {
                    nickName: "玩家昵称",
                    content: "今晚摸了",
                },
            ],
        },
        {
            title: "title2",
            MessageList: [
                {
                    nickName: "玩家昵称",
                    content: "今晚摸了",
                },
                {
                    nickName: "玩家昵称",
                    content: "今晚摸了",
                },
                {
                    nickName: "玩家昵称",
                    content: "今晚摸了",
                },
            ],
        },
        {
            title: "title3",
            MessageList: [
                {
                    nickName: "玩家昵称",
                    content: "今晚摸了",
                },
            ],
        },
        {
            title: "title4",
            MessageList: [
                {
                    nickName: "玩家昵称",
                    content: "今晚摸了",
                },
                {
                    nickName: "玩家昵称",
                    content: "今晚摸了",
                },
            ],
        },
    ];
    return (
        <div className={`${Style.MessageBoard}`}>
            {MessagePageList.map((item) => (
                <MessagePage MessagePage={item} key={nanoid()} />
            ))}
        </div>
    );
};

export default index;
