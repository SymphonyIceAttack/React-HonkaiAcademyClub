import React from "react";
import Style from "./ScoreItem.module.less";





const index = () => {
    return <div className={`${Style.ScoreItem}`}>
        <div className={`${Style.checkered}`}>
            NickName
        </div>
        <div className={`${Style.checkered}`}>
            Account
        </div>
        <div className={`${Style.checkered}`}>
        次数
        </div>
        <div className={`${Style.checkered}`}>
            <input type="checkbox" name="" id="" />
        </div>
    </div>;
};

export default index;
