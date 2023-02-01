import React from "react";
import Style from "./FilterTitleBox.module.less";
interface Props {
    children: React.ReactNode | React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return <div className={`${Style.FilterTitleBox}`}>{children}</div>;
};

export default index;
