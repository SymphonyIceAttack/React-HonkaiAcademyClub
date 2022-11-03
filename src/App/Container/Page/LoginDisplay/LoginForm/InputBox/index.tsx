import React, { useCallback } from "react";
import Style from "./InputBox.module.less";
import { nanoid } from "nanoid";
interface Props {
    label: string;
    type: "text" | "password";
}
const index: React.FC<Props> = ({ label, type }) => {
    const inputId = useCallback(() => nanoid(), []);
    return (
        <div className={`${Style.InputBox}`}>
            <input type={type} id={inputId()} required />
            <label htmlFor={inputId()}>{label}</label>
        </div>
    );
};

export default index;
