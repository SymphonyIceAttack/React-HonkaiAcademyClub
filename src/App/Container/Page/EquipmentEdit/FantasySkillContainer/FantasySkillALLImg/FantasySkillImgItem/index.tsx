import { nanoid } from "nanoid";
import React, { useState } from "react";
import Style from "./FantasySkillImgItem.module.less";
import type { FantasySkillImgItemType } from "../useFantasySkillImgHook";

interface Props {
    ClickEvent: (ImgSrc: string, ExclusiveGeneral:string) => void;
    FantasySkillImgItem: FantasySkillImgItemType;
}

const index: React.FC<Props> = ({ ClickEvent, FantasySkillImgItem }) => {
    const [ExclusiveGeneral, setExclusiveGeneral] = useState<"专属" | "通用">(
        "通用"
    );
    return (
        <div className={`${Style.FantasySkillImgItem}`} key={nanoid()}>
            <div
                className={`${Style.ImgBox}`}
                onClick={() => {
                    ClickEvent(FantasySkillImgItem.imgSrc,ExclusiveGeneral);
                }}>
                <img src={FantasySkillImgItem.imgSrc} />
            </div>
            <button
                onClick={() => {
                    ExclusiveGeneral === "通用"
                        ? setExclusiveGeneral("专属")
                        : setExclusiveGeneral("通用");
                }}>
                {ExclusiveGeneral}
            </button>
        </div>
    );
};

export default index;
