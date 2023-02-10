import React, { useEffect } from "react";
import Style from "./EquipMentChoseList.module.less";
import ItemStyle from "./EquipMentChoseItem/EquipMentChoseItem.module.less";
import type { EquipMentOneListType } from "../../useEquipMentAllListHook";
import EquipMentChoseItem from "./EquipMentChoseItem";
import EquipMentChoseNotifation from "./EquipMentChoseNotifation";
import { nanoid } from "nanoid";

interface Props {
    SearchEquipMentResult: EquipMentOneListType[];
    ChoseFinishEvent: (Message: EquipMentOneListType) => void;
    isLoadingShow: boolean;
}
const index: React.FC<Props> = ({
    SearchEquipMentResult,
    ChoseFinishEvent,
    isLoadingShow,
}) => {
    useEffect(() => {
        const eles = document.querySelectorAll(
            `.${Style.EquipMentChoseList} .${ItemStyle.EquipMentChoseItem} img`
        );

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    const Img = entry.target as HTMLImageElement;
                    if (Img.src !== Img.id) {
                        Img.src = Img.id;
                    }
                }
            });
        });
        eles.forEach((item) => {
            observer.observe(item);
        });
    }, [SearchEquipMentResult]);
    return (
        <div className={`${Style.EquipMentChoseList}`}>
            {isLoadingShow ? (
                SearchEquipMentResult.length === 0 ? (
                    <EquipMentChoseNotifation />
                ) : null
            ) : null}
            {SearchEquipMentResult.map((item) => {
                return (
                    <EquipMentChoseItem
                        {...item}
                        key={nanoid()}
                        ChoseFinishEvent={ChoseFinishEvent}
                    />
                );
            })}
        </div>
    );
};

export default index;
