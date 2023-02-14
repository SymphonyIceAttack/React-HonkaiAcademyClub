import { nanoid } from "nanoid";
import React from "react";
import Style from "./FantasySkillALLImg.module.less";
import useFantasySkillImgHook from "./useFantasySkillImgHook";
interface Props {
    ClickEvent: (ImgSrc: string) => void;
}
const index: React.FC<Props> = ({ ClickEvent }) => {
    const [FantasySkillImgList, requestFantasySkillImgList] =
        useFantasySkillImgHook();
    return (
        <div className={`${Style.FantasySkillALLImg}`}>
            {FantasySkillImgList.map((item) => (
                <div
                    className={`${Style.FantasySkillALLContainer}`}
                    onClick={() => {
                        ClickEvent(item.imgSrc);
                    }}
                    key={nanoid()}>
                    <div className={`${Style.ImgBox}`}>
                        <img src={item.imgSrc} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default React.memo(index);
