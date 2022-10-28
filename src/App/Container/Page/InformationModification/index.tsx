import React from "react";
import Style from "./InformationModification.module.less";
import UpLoadForm from "./UpLoadForm";
import src from "/InformationLIstImage/test.png";
import type { InformationItemType } from "@/Types/InformationTypes";
const index = () => {
    const InformationListData: InformationItemType = {
        avatarImg: src,
        nickName: "nickname",
        equipmentImg: src,
        badgImg: src,
        InvolutionCount: 123,
    };
    return (
        <div className={`${Style.InformationModification}`}>
            <UpLoadForm {...InformationListData} />
        </div>
    );
};

export default index;
