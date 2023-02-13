import React from "react";
import Style from "./FantasySkillsButton.module.less";
interface Props {
    ClickEvent: () => void;
}
const index: React.FC<Props> = ({ ClickEvent }) => {
    return (
        <div className={`${Style.FantasySkillsButton}`}>
            <button
                onClick={() => {
                    ClickEvent();
                }}>
                空想技能
            </button>
        </div>
    );
};

export default index;
