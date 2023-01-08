import React, { useEffect } from "react";
import InformationList from "./InformationList";
import Style from "./InformationDisplay.module.less";
const index = () => {

    return (
        <div className={`${Style.InformationDisplay}`}>
            <InformationList />
        </div>
    );
};

export default index;
