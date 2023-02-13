import React from "react";
import Style from "./FantasySkillStringListItem.module.less";
interface Props {
    content: string;
    id: string;
    ClickEvent: (id: string, content: string) => void;
}
const index: React.FC<Props> = ({ content, id, ClickEvent }) => {
    return (
        <div className={`${Style.FantasySkillStringListItem}`}>
            <button
                onClick={() => {
                    ClickEvent(id, content);
                }}>
                {content}
            </button>
        </div>
    );
};

export default index;
