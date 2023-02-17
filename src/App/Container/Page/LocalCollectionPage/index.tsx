import React from "react";
import Style from "./LocalCollectionPage.module.less";
import LocalCollectionHeader from "./LocalCollectionHeader";
const index = () => {
    return (
        <div className={`${Style.LocalCollectionPage}`}>
            <LocalCollectionHeader />
        </div>
    );
};

export default index;
