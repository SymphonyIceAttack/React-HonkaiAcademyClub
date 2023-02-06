import React, { useState } from "react";
import Style from "./Page.module.less";
import entry from "./entry";
const index = () => {
    return <div className={`${Style.Page}`}>{entry()}</div>;
};

export default index;
