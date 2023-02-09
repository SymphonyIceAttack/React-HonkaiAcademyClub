import React from "react";
import Style from "./NavBar.module.less";
import NavList from "./NavList";
import NavItem from "./NavList/NavItem";
import { BiTestTube, BiUserCircle } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiChalkboard } from "react-icons/bi";
interface Props {
    isExtend: boolean;
}

const index: React.FC<Props> = ({ isExtend }) => {
    return (
        <div
            className={`${Style.NavBar}`}
            style={{ width: isExtend ? "240px" : "0px" }}>
            <NavList>
                {/* <NavItem to="/InformationDisplay" content="成员信息">
                    <AiOutlineUnorderedList size={25} />
                </NavItem>
                <NavItem to="/InformationModification" content="信息修改">
                    <BiUserCircle size={25} />
                </NavItem>
                <NavItem to="/MessageBoard" content="留言板">
                    <BiChalkboard size={25} />
                </NavItem>
                <NavItem to="/LoginDisplay" content="登陆页面">
                    <BiChalkboard size={25} />
                </NavItem>
                <NavItem to="/BackUrlDisplay" content="后端服务器指定">
                    <BiChalkboard size={25} />
                </NavItem>
                <NavItem to="/ScorePage" content="评分页面">
                    <BiChalkboard size={25} />
                </NavItem>
                <NavItem to="/LeaderboardDisplay" content="排行榜">
                    <BiChalkboard size={25} />
                </NavItem> */}
                <NavItem to="/ForecastEquipMentDisplay" content="装备up预测">
                    <BiChalkboard size={25} />
                </NavItem>
                <NavItem to="/EquipmentEdit" content="装备编辑">
                    <BiChalkboard size={25} />
                </NavItem>
            </NavList>
        </div>
    );
};

export default index;
