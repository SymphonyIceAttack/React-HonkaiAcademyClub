import React from "react";
import Style from "./MessagePage.module.less";
import MessageTitle from "./MessageTitle";
import MessageList from "./MessageList";
import type { MessagePageType } from "@/Types/MessageBoardType";
import BoxScrollVisable from "@/component/BoxScrollVisable";
interface Props {
    MessagePage: MessagePageType;
}
const index: React.FC<Props> = ({ MessagePage }) => {
    return (
        <div className={`${Style.MessagePage}`}>
            <BoxScrollVisable>
                <MessageTitle title={MessagePage.title} />
            </BoxScrollVisable>
            <MessageList MessageList={MessagePage.MessageList} />
        </div>
    );
};

export default index;
