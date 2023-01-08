import React from "react";
import Style from "./RegisterDisplay.module.less";
import RegisterForm from "./RegisterForm";
import type { InformationItemType } from "@/Types/InformationTypes";
const index = () => {
    const InformationListData:Omit<InformationItemType,"InvolutionCount"> = {
        avatarImg: "",
        nickName: "",
        equipmentImg: "",
        badgImg: "",
    };
    return (
        <div className={`${Style.RegisterDisplay}`}>
            <RegisterForm {...InformationListData} />
        </div>
    );
};

export default index;
