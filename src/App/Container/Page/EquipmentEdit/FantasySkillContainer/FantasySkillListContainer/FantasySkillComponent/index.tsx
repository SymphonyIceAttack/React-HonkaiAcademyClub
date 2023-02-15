import { nanoid } from "nanoid";
import React from "react";
import { FantasySkillType } from "../../../useFantasySkillHook";
import Style from "./FantasySkillComponent.module.less";
import Src from "/fish.png";

interface Props {
    FantasySkill: FantasySkillType;
    CurrentId: string;
    ChoseIDEvent: (id: string) => void;
}
const index: React.FC<Props> = ({ FantasySkill, CurrentId, ChoseIDEvent }) => {
    return (
        <div
            className={`${Style.FantasySkillComponent} ${
                CurrentId === FantasySkill.id ? Style.active : " "
            }`}>
            <span>
                {CurrentId === FantasySkill.id
                    ? `>${FantasySkill.category}<`
                    : FantasySkill.category}
            </span>
            <span className={`${Style.ExclusiveGeneralText}`}>
                {FantasySkill.ExclusiveGeneral}
            </span>
            <div
                className={`${Style.ImgContainer}`}
                onClick={() => {
                    ChoseIDEvent(FantasySkill.id);
                }}>
                <img src={FantasySkill.value} alt="" />
            </div>
        </div>
    );
};

export default index;
