import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./NavItem.module.less";
interface Props {
    to: string;
    children: React.ReactNode;
    content: string;
}

const index: React.FC<Props> = ({ to, children, content }) => {
    const ActiveClass = ({ isActive }: { isActive: boolean }): string => {
        if (isActive) return `${Style.NavItem} ${Style.activeLink}`;
        return `${Style.NavItem}`;
    };
    return (
        <NavLink className={ActiveClass} to={to}>
            {children}
            <span>{content}</span>
        </NavLink>
    );
};

export default index;
