import React from "react";
import Style from "./FantasySkillHeader.module.less";

import { IoMdArrowRoundBack } from "react-icons/io";

interface Props {
    stuff: string;
    closeEvent: () => void;
}
const index: React.FC<Props> = ({ closeEvent, stuff }) => {
    return (
        <div className={`${Style.FantasySkillHeader}`}>
            <button
                className={`${Style.buttonBack}`}
                onClick={() => {
                    closeEvent();
                }}>
                <IoMdArrowRoundBack size={40} />
            </button>
            <span>空想技能选择{stuff}</span>
        </div>
    );
};

export default index;