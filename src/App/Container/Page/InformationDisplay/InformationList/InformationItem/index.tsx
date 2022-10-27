import React from "react";
import Style from "./InformationItem.module.less";
import type { InformationItemType } from "@/Types/InformationTypes";

const index: React.FC<InformationItemType> = ({
    avatarImg,
    nickName,
    equipmentImg,
    badgImg,
    InvolutionCount,
}) => {
    return (
        <div className={`${Style.InformationItem}`}>
            <div className={`${Style.ImageContainer}`}>
                <img src={avatarImg} alt="" />
            </div>
            <div className={`${Style.User}`}>
                <div className={`${Style.nameContainer}`}>
                    <span>{nickName}</span>
                </div>
                <div className={`${Style.equipmentContainer}`}>
                    <img src={equipmentImg} alt="" />
                </div>
            </div>
            <div className={`${Style.statusContainer}`}>
                <div className={`${Style.badgeContainer}`}>
                    <img src={badgImg} alt="" />
                </div>
                <div className={`${Style.Involution}`}>
                    目前摸鱼次数 {InvolutionCount} 次
                </div>
            </div>
        </div>
    );
};

export default index;
