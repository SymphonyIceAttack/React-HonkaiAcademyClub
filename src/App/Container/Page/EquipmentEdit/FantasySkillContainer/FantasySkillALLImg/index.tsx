import { nanoid } from "nanoid";
import React, { useState } from "react";
import Style from "./FantasySkillALLImg.module.less";
import useFantasySkillImgHook from "./useFantasySkillImgHook";
import FantasySkillImgItem from "./FantasySkillImgItem";

interface Props {
    ClickEvent: (ImgSrc: string, ExclusiveGeneral:string) => void;
}
const index: React.FC<Props> = ({ ClickEvent }) => {
    const [FantasySkillImgList, requestFantasySkillImgList] =
        useFantasySkillImgHook();

    return (
        <div className={`${Style.FantasySkillALLImg}`}>
            {FantasySkillImgList.map((item) => (
                <FantasySkillImgItem
                    FantasySkillImgItem={item}
                    ClickEvent={ClickEvent}
                />
            ))}
        </div>
    );
};

export default React.memo(index);
