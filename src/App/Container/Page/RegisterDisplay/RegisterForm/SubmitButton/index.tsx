import React from "react";
import Style from "./SubmitButton.module.less";
import { AiOutlineCloudUpload } from "react-icons/ai";
interface Props {
    ClickEvent: () => void;
}
const index: React.FC<Props> = ({ ClickEvent }) => {
    return (
        <button
            className={`${Style.SubmitButton}`}
            onClick={(event) => {
                event.preventDefault();
                ClickEvent();
            }}>
            注册账号
            <AiOutlineCloudUpload size={30} />
        </button>
    );
};

export default index;
