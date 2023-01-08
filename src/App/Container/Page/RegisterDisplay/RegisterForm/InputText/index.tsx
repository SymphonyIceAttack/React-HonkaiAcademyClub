import React, { useState } from "react";
import Style from "./InputText.module.less";

interface Props {
    defautValue: string;
    title: string;
    setValue: (value: string) => void;
}
const index: React.FC<Props> = ({ defautValue, title, setValue }) => {
    return (
        <div className={`${Style.InputText}`}>
            <div className={`${Style.InputContainer}`}>
                <span>{title}</span>
                <input
                    type="text"
                    placeholder={""}
                    value={defautValue}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default index;
