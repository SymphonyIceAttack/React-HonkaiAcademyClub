import React, { useCallback, useState } from "react";
import Style from "./EquipMentItem.module.less";
import { RiAddBoxFill } from "react-icons/ri";
import type { EquipmentType } from "@/Types/EquipeMentType";
interface Props {
    type: EquipmentType;
    clientId: string;

    clickEvent: (type: EquipmentType, clientId: string) => void;
}
const index: React.FC<Props> = ({ type, clickEvent, clientId }) => {
    const [color, setColor] = useState<"blue" | "blueviolet">("blue");
    return (
        <div className={`${Style.EquipMentItem}`}>
            <div className={`${Style.EquipmetImageContainer}`}>
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
            </div>
            <span>{type}</span>
            <span>负重{25}</span>
        </div>
    );
};

export default index;
