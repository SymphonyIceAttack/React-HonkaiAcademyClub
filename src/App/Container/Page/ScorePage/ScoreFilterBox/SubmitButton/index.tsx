import React from "react";
import Style from "./SubmitButton.module.less";
interface Props {
    ClickEvent: () => void;
}
const index: React.FC<Props> = ({ ClickEvent }) => {
    return (
        <div className={`${Style.SubmitButton}`}>
            <button
                onClick={() => {
                    ClickEvent();
                }}>
                提交数据
            </button>
        </div>
    );
};

export default index;
