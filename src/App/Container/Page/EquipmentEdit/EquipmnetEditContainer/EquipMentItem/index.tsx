import React, { useCallback, useEffect, useState } from "react";
import Style from "./EquipMentItem.module.less";
import { RiAddBoxFill } from "react-icons/ri";
import type { EquipmentType } from "@/Types/EquipeMentType";
interface Props {
    type: EquipmentType;
    clientId: string;
    title: string;
    equipMentUid: string;
    ImgSrc: string;
    cost: number;

    clickEvent: (type: EquipmentType, clientId: string) => void;
}
const index: React.FC<Props> = ({
    type,
    clickEvent,
    clientId,
    title,
    equipMentUid,
    ImgSrc,
    cost,
}) => {
    const [color, setColor] = useState<"blue" | "blueviolet">("blue");

    return (
        <div className={`${Style.EquipMentItem}`}>
            <div className={`${Style.EquipmetImageContainer}`}>
                {ImgSrc.length !== 0 ? (
                    <img
                        src={ImgSrc}
                        onClick={() => {
                            clickEvent(type, clientId);
                        }}
                        onMouseEnter={() => {
                            setColor("blueviolet");
                        }}
                        onMouseLeave={() => {
                            setColor("blue");
                        }}
                    />
                ) : (
                    <RiAddBoxFill
                        color={color}
                        size={30}
                        onClick={() => {
                            clickEvent(type, clientId);
                        }}
                        onMouseEnter={() => {
                            setColor("blueviolet");
                        }}
                        onMouseLeave={() => {
                            setColor("blue");
                        }}
                    />
                )}
            </div>
            <span>{title.length === 0 ? type : title}</span>
            <span>负重{cost}</span>
        </div>
    );
};

export default index;
