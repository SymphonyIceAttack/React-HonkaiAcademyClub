import React from "react";
import Style from "./ScoreFrom.module.less";
interface Props {
    children: React.ReactNode[] | React.ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
    return <div className={`${Style.ScoreFrom}`}>{children}</div>;
};

export default index;
