import React from "react";
import Style from "./MessageTitle.module.less";
interface Props {
    title: string;
}


const index: React.FC<Props> = ({ title }) => {
    return <div className={`${Style.MessageTitle}`}>{title}</div>;
};

export default index;
