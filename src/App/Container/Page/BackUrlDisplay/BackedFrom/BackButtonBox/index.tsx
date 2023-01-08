import React from "react";
import Style from "./BackButtonBox.module.less";
interface Props {
    resetEvent: () => void;
    setUpEvent: () => void;
}
const index: React.FC<Props> = ({ resetEvent, setUpEvent }) => {
    return (
        <div className={`${Style.BackButtonBox}`}>
            <button
                onClick={() => {
                    resetEvent();
                }}>
                重置
            </button>
            <button
                onClick={() => {
                    setUpEvent();
                }}>
                设定
            </button>
        </div>
    );
};

export default index;
