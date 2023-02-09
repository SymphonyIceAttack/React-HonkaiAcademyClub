import React from "react";
import Style from "./EquipMentEditHeader.module.less";


interface Props {
    children: React.ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
    return <div className={`${Style.EquipMentEditHeader}`}>{children}</div>;
};

export default index;
