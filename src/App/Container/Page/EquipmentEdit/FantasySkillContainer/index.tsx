import { nanoid } from "nanoid";
import Reacti, { useState } from "react";
import { FantasySkillType } from "../useFantasySkillHook";
import Style from "./FantasySkillContainer.module.less";
import FantasySkillHeader from "./FantasySkillHeader";
import FantasySkillListContainer from "./FantasySkillListContainer";
import FantasySkillComponent from "./FantasySkillListContainer/FantasySkillComponent";
import FantasySkillALLImg from "./FantasySkillALLImg";
import { toast } from "react-toastify";

interface Props {
    isMasterShow: boolean;
    FantasySkillList: FantasySkillType[];
    isFantasySkillShow: boolean;
    closeEvent: () => void;
    ClickEvent: (id: string, ImgSrc: string, ExclusiveGeneral: string) => void;
}
const index: React.FC<Props> = ({
    isMasterShow,
    isFantasySkillShow,
    closeEvent,
    ClickEvent,
    FantasySkillList,
}) => {
    const [CurrentId, setCurrentId] = useState("");

    return (
        <div
            className={`${Style.FantasySkillContainer}`}
            style={{
                top: isFantasySkillShow ? "0%" : "100%",
            }}>
            <FantasySkillHeader
                closeEvent={closeEvent}
                stuff={isMasterShow ? "-主套" : "-备用"}
            />
            <FantasySkillListContainer>
                {FantasySkillList.map((item) => (
                    <FantasySkillComponent
                        FantasySkill={item}
                        key={nanoid()}
                        CurrentId={CurrentId}
                        ChoseIDEvent={(id) => {
                            setCurrentId(id);
                        }}
                    />
                ))}
            </FantasySkillListContainer>
            <FantasySkillALLImg
                ClickEvent={(ImgSrc, ExclusiveGeneral) => {
                    if (CurrentId === "") {
                        toast("请先选择技能主动/被动");
                    } else {
                        ClickEvent(CurrentId, ImgSrc, ExclusiveGeneral);
                    }
                }}
            />
        </div>
    );
};

export default index;
