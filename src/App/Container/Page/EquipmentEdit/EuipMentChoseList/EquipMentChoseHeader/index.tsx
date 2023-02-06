import React from "react";
import Style from "./EquipMentChoseHeader.module.less";

import { IoMdArrowRoundBack } from "react-icons/io";
import type { EquipmentType } from "@/Types/EquipeMentType";

interface Props {
    closeEvent: () => void;
    inputSearch: string;
    changeInputSearch: (value: string) => void;
    EquipCurrentMenttType: EquipmentType | null;
    SearchEvent: () => void;
}
const index: React.FC<Props> = ({
    closeEvent,
    inputSearch,
    changeInputSearch,
    EquipCurrentMenttType,
    SearchEvent,
}) => {
    return (
        <div className={`${Style.EquipMentChoseHeader}`}>
            <button
                className={`${Style.buttonBack}`}
                onClick={() => {
                    closeEvent();
                }}>
                <IoMdArrowRoundBack size={40} />
            </button>
            <input
                type="text"
                name=""
                id=""
                value={inputSearch}
                onChange={(ev) => {
                    changeInputSearch(ev.target.value);
                }}
                placeholder={`请输入${EquipCurrentMenttType}名称`}
            />

            <button
                className={`${Style.buttonSearch}`}
                onClick={() => {
                    SearchEvent();
                }}>
                搜索
            </button>
        </div>
    );
};

export default index;
