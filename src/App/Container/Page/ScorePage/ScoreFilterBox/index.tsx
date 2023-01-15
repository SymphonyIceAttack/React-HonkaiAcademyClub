import React from "react";
import Style from "./ScoreFilterBox.module.less";
interface Props {
    children: React.ReactNode | React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return <div className={`${Style.ScoreFilterBox}`}>{children}</div>;
};

export default index;
