import React, { useState, useEffect, useRef, useCallback } from "react";
import Style from "./EquipMentChoseItem.module.less";
import type { EquipMentOneListType } from "../../../useEquipMentAllListHook";
interface Props {
    type: string;
    clientId: string;
    equipMentUid: string;
    ImgSrc: string;
    title: string;
    cost: number;

    ChoseFinishEvent: (Message: EquipMentOneListType) => void;
}
const index: React.FC<Props> = ({
    ImgSrc,
    title,
    ChoseFinishEvent,
    type,
    clientId,
    cost,
    equipMentUid,
}) => {
    return (
        <div
            className={`${Style.EquipMentChoseItem}`}
            onClick={() => {
                ChoseFinishEvent({
                    type,
                    clientId,
                    equipMentUid,
                    ImgSrc,
                    title,
                    cost,
                });
            }}>
            <img src={""} id={ImgSrc} />
            <div className={`${Style.TextContainer}`}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default index;
