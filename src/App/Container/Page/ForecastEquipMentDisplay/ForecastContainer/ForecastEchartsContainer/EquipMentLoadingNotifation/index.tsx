import React from "react";
import Style from "./EquipMentLoadingNotifation.module.less";
import { BiBorderNone } from "react-icons/bi";
const index = () => {
    return (
        <div className={`${Style.EquipMentLoadingNotifation}`}>
            <BiBorderNone size={30} />
        </div>
    );
};

export default index;
