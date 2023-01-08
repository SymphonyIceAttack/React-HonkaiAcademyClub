import React from "react";
import Style from "./BackInputBox.module.less";
interface Props {
    value: string;
    ChangeEvent: (value: string) => void;
}
const index: React.FC<Props> = ({ value, ChangeEvent }) => {
    return (
        <div className={`${Style.BackInputBox}`}>
            <input
                type="text"
                name=""
                id=""
                value={value}
                onChange={(e) => {
                    ChangeEvent(e.target.value);
                }}
            />
        </div>
    );
};

export default index;
