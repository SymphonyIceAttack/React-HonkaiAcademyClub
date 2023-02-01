import React from "react";
import Style from "./SwitchButton.module.less";

interface Props {
    ClickEvent: (isShow: boolean) => void;
    isShow: boolean;
}

const index: React.FC<Props> = ({ ClickEvent, isShow }) => {
    return (
        <div className={`${Style.SwitchButton}`}>
            {!isShow ? (
                <button
                    onClick={() => {
                        ClickEvent(true);
                    }}>
                    显示列表
                </button>
            ) : (
                <button
                    onClick={() => {
                        ClickEvent(false);
                    }}>
                    隐藏列表
                </button>
            )}
        </div>
    );
};

export default index;
