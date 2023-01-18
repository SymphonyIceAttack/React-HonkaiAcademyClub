import React from "react";
import Style from "./IllustratedBookDisplay.module.less";
import IllustratedBookHook from "./IllustratedBookHook";
const index = () => {
    IllustratedBookHook();
    return <div className={`${Style.IllustratedBookDisplay}`}>图鉴页面</div>;
};

export default index;
