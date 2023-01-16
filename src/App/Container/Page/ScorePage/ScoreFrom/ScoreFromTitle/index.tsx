import React from "react";
import Style from "./ScoreItem.module.less";

const index = () => {
    return (
        <div className={`${Style.ScoreItem}`}>
            <div className={`${Style.checkered}`}>
                <span>昵称</span>
            </div>
            <div className={`${Style.checkered}`}>
                <span>账号</span>
            </div>
            <div className={`${Style.checkered}`}>摸鱼次数</div>
            <div className={`${Style.checkered}`}>是否摸鱼</div>
        </div>
    );
};

export default index;
