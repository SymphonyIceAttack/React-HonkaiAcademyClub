import React, { Children } from "react";
import Style from "./FantasySkillListContainer.module.less";
interface Props {
    children: React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return (
        <div className={`${Style.FantasySkillListContainer}`}>{children}</div>
    );
};

export default index;
