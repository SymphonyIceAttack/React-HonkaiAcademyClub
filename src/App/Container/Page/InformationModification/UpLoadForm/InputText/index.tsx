import React, { useState } from "react";
import Style from "./InputText.module.less";
import { AiFillEdit, AiTwotoneSave } from "react-icons/ai";
import { BsSave2 } from "react-icons/bs";

interface Props {
    defautValue: string;
    title: string;
    setValue: (value: string) => void;
}
const index: React.FC<Props> = ({ defautValue, title, setValue }) => {
    const [isinputDisabled, setIsInputDisabled] = useState(true);
    return (
        <div className={`${Style.InputText}`}>
            <div className={`${Style.InputContainer}`}>
                <span>{title}</span>
                <input
                    type="text"
                    placeholder={defautValue}
                    disabled={isinputDisabled}
                    value={defautValue}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </div>
            {isinputDisabled ? (
                <button
                    type="button"
                    onClick={() => {
                        setIsInputDisabled(false);
                    }}
                >
                    编辑
                    <AiFillEdit size={20} />
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        setIsInputDisabled(true);
                    }}
                >
                    保存
                    <BsSave2 size={20} />
                </button>
            )}
        </div>
    );
};

export default index;
