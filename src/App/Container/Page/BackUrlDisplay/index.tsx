import React, { useEffect } from "react";
import Style from "./BackedUrlDisplay.module.less";
import BackedFrom from "./BackedFrom";
const index = () => {
    return (
        <div className={`${Style.BackUrlDisplay}`}>
            <BackedFrom />
        </div>
    );
};

export default index;
