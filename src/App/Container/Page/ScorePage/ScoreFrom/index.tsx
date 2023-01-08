import React from "react";
import Style from "./ScoreFrom.module.less";
import ScoreItem from "./ScoreItem";
interface Props{
    
}
const index = () => {
    return (
        <div className={`${Style.ScoreFrom}`}>
            <ScoreItem />
            <ScoreItem />
            <ScoreItem />
        </div>
    );
};

export default index;
