import React from "react";
import Style from "./EquipMentHeaderButton.module.less";
interface Props {
    content: string;
    ClickEvent: () => void;
}
const index: React.FC<Props> = ({ ClickEvent, content }) => {
    return (
        <div className={`${Style.EquipMentHeaderButton}`}>
            <button
                onClick={() => {
                    ClickEvent();
                }}>
                {content}
            </button>
        </div>
    );
};

export default index;
