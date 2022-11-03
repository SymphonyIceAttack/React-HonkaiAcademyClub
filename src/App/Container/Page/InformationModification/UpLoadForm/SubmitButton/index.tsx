import React from "react";
import Style from "./SubmitButton.module.less";
import { AiOutlineCloudUpload } from "react-icons/ai";
const index = () => {
    return (
        <button className={`${Style.SubmitButton}`}>
            上传信息
            <AiOutlineCloudUpload size={30} />
        </button>
    );
};

export default index;
