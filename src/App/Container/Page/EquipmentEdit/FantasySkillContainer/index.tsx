import { nanoid } from "nanoid";
import React from "react";
import { FantasySkillType } from "../useFantasySkillHook";
import Style from "./FantasySkillContainer.module.less";
import FantasySkillHeader from "./FantasySkillHeader";
import FantasySkillListContainer from "./FantasySkillListContainer";
import FantasySkillComponent from "./FantasySkillListContainer/FantasySkillComponent";
interface Props {
    FantasySkillList: FantasySkillType[];
    isFantasySkillShow: boolean;
    closeEvent: () => void;
    ClickEvent: (id: string, content: string) => void;
}
const index: React.FC<Props> = ({
    isFantasySkillShow,
    closeEvent,
    ClickEvent,
    FantasySkillList,
}) => {
    return (
        <div
            className={`${Style.FantasySkillContainer}`}
            style={{
                top: isFantasySkillShow ? "0%" : "100%",
            }}>
            <FantasySkillHeader closeEvent={closeEvent} />
            <FantasySkillListContainer>
                {FantasySkillList.map((item) => (
                    <FantasySkillComponent
                        FantasySkill={item}
                        key={nanoid()}
                        ClickEvent={ClickEvent}
                    />
                ))}
            </FantasySkillListContainer>
        </div>
    );
};

export default index;
