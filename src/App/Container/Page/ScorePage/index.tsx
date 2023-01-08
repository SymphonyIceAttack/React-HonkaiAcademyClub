import React from "react";
import Style from "./ScorePage.module.less";
import ScroeFrom from "./ScoreFrom";

const index = () => {
    return (
        <div className={`${Style.ScorePage}`}>
            <ScroeFrom />
        </div>
    );
};

export default index;
