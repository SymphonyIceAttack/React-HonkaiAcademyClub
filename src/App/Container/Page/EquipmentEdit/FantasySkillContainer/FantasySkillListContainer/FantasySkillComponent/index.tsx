import { nanoid } from "nanoid";
import React from "react";
import { FantasySkillType } from "../../../useFantasySkillHook";
import Style from "./FantasySkillComponent.module.less";
import FantasySkillStringListItem from "./FantasySkillStringListItem";
import useFantasySkillStringListHook from "./useFantasySkillStringListHook";
interface Props {
    FantasySkill: FantasySkillType;
    ClickEvent: (id: string, content: string) => void;
}
const index: React.FC<Props> = ({ FantasySkill, ClickEvent }) => {
    const [FantasySkillStringList] = useFantasySkillStringListHook();

    return (
        <div className={`${Style.FantasySkillComponent}`}>
            <span>{FantasySkill.category}</span>
            <input
                type="text"
                disabled={true}
                placeholder={FantasySkill.value}
            />
            {FantasySkillStringList.map((item) => (
                <FantasySkillStringListItem
                    ClickEvent={ClickEvent}
                    key={nanoid()}
                    content={item}
                    id={FantasySkill.id}
                />
            ))}
        </div>
    );
};

export default index;
