import React from "react";
import Style from "./Container.module.less"
interface Props {
    children: React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return <div className={`${Style.Container}`}>{children}</div>;
};

export default index;
