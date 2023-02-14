import React from "react";
import Style from "./DemonLinkHeader.module.less";

import { IoMdArrowRoundBack } from "react-icons/io";

interface Props {
    stuff: string;
    closeEvent: () => void;
}
const index: React.FC<Props> = ({ closeEvent, stuff }) => {
    return (
        <div className={`${Style.DemonLinkHeader}`}>
            <button
                className={`${Style.buttonBack}`}
                onClick={() => {
                    closeEvent();
                }}>
                <IoMdArrowRoundBack size={40} />
            </button>
            <span>使魔Link等级选择{stuff}</span>
        </div>
    );
};

export default index;
