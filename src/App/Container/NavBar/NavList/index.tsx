import React from "react";
import Style from "./NavList.module.less";
interface Props {
    children: React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return <ul className={`${Style.NavList}`}>{children}</ul>;
};

export default index;
