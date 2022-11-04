import React from "react";
import Style from "./LoginButton.module.less";
interface Props {
    content: string;
    ClickEvent: () => void;
    type: "submit" | "button";
}
const index: React.FC<Props> = ({ content, ClickEvent, type }) => {
    return (
        <button
            type={type}
            className={`${Style.LoginButton}`}
            onClick={() => ClickEvent()}
        >
            {content}
        </button>
    );
};

export default index;
