import React from "react";
import Style from "./NavBar.module.less";
import NavList from "./NavList";
import NavItem from "./NavList/NavItem";
import { BiTestTube } from "react-icons/bi";
interface Props {
    isExtend: boolean;
}

const index: React.FC<Props> = ({ isExtend }) => {
    return (
        <div
            className={`${Style.NavBar}`}
            style={{ width: isExtend ? "240px" : "0px" }}
        >
            <NavList>
                <NavItem to="/test1" content="Test1">
                    <BiTestTube size={25} />
                </NavItem>
                <NavItem to="/test2" content="Test2">
                    <BiTestTube size={25} />
                </NavItem>
            </NavList>
        </div>
    );
};

export default index;
