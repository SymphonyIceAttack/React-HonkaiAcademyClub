import React, { useCallback } from "react";
import Style from "./InputBox.module.less";
import { nanoid } from "nanoid";
interface Props {
    value: string;
    onChangeEvent: (value: string) => void;
    label: string;
    type: "text" | "password";
}
const index: React.FC<Props> = ({ label, type, value, onChangeEvent }) => {
    const inputId = useCallback(() => nanoid(), []);
    return (
        <div className={`${Style.InputBox}`}>
            <input
                type={type}
                id={inputId()}
                required
                value={value}
                onChange={(event) => {
                    onChangeEvent(event.target.value);
                }}
            />
            <label htmlFor={inputId()}>{label}</label>
        </div>
    );
};

export default index;
