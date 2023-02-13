import React from "react";
import Style from "./FantasySkillHeader.module.less";

import { IoMdArrowRoundBack } from "react-icons/io";

interface Props {
    closeEvent: () => void;
}
const index: React.FC<Props> = ({ closeEvent }) => {
    return (
        <div className={`${Style.FantasySkillHeader}`}>
            <button
                className={`${Style.buttonBack}`}
                onClick={() => {
                    closeEvent();
                }}>
                <IoMdArrowRoundBack size={40} />
            </button>
            <span>空想技能选择</span>
        </div>
    );
};

export default index;
