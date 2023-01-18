import React from "react";
import Style from "./DownButtonItem.module.less";
interface Props {
    content: string;
    ClickEvent: () => void;
}
const index: React.FC<Props> = ({ content, ClickEvent }) => {
    return (
        <button
            onClick={() => {
                ClickEvent();
            }}
            className={`${Style.DownButtonItem}`}>
            {content}
        </button>
    );
};

export default index;
