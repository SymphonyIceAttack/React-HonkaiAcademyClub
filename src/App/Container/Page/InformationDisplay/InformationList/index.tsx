import React from "react";
import Style from "./InformationList.module.less";
import InformationItem from "./InformationItem";
import type { InformationItemType } from "@/Types/InformationTypes";
import src from "/InformationLIstImage/test.png";
import { nanoid } from "@reduxjs/toolkit";
const index = () => {
    const InformationListData: InformationItemType[] = [
        {
            avatarImg: src,
            nickName: "nickname",
            equipmentImg: src,
            badgImg: src,
            InvolutionCount: 123,
        },
        {
            avatarImg: src,
            nickName: "nickname",
            equipmentImg: src,
            badgImg: src,
            InvolutionCount: 123,
        },
        {
            avatarImg: src,
            nickName: "nickname",
            equipmentImg: src,
            badgImg: src,
            InvolutionCount: 123,
        },
        {
            avatarImg: src,
            nickName: "nickname",
            equipmentImg: src,
            badgImg: src,
            InvolutionCount: 123,
        },
        {
            avatarImg: src,
            nickName: "nickname",
            equipmentImg: src,
            badgImg: src,
            InvolutionCount: 123,
        },
    ];
    return (
        <div className={`${Style.InformationList}`}>
            {InformationListData.map((item) => {
                return <InformationItem {...item} key={nanoid()} />;
            })}
        </div>
    );
};

export default index;
