import React from "react";
import Style from "./ScoreItem.module.less";

const index = () => {
    return (
        <div className={`${Style.ScoreItem}`}>
            <div className={`${Style.checkered}`}>昵称</div>
            <div className={`${Style.checkered}`}>账号</div>
            <div className={`${Style.checkered}`}>摸鱼次数</div>
            <div className={`${Style.checkered}`}>是否摸鱼</div>
        </div>
    );
};

export default index;
