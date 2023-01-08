import React from "react";
import Style from "./DownButtonItem.module.less";
interface Props {
    content: string;
}
const index: React.FC<Props> = ({ content }) => {
    return <button className={`${Style.DownButtonItem}`}>{content}</button>;
};

export default index;
