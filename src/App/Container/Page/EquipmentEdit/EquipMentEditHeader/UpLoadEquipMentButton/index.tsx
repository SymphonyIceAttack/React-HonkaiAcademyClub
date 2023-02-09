import React from "react";
import Style from "./UpLoadEquipMentButton.module.less";
import { BiUpload } from "react-icons/bi";
const index = () => {
    return (
        <div className={`${Style.UpLoadEquipMentButton}`}>
            <span>一键导出</span>
            <BiUpload size={30} color="green" />
        </div>
    );
};

export default index;
