import React from "react";
import Style from "./Loading.module.less";
const index = () => {
    return (
        <div className={`${Style.Loading}`}>
            <div className={`${Style.infinteIcon}`}>
                <div className={`${Style.filter}`}></div>
                <div className={`${Style.Text}`}>摸</div>
            </div>
        </div>
    );
};

export default index;
