import React from "react";
import Style from "./ScoreItem.module.less";
import type { ScoreItemType } from "../..";

interface Props extends ScoreItemType {
    disPatchChange: (Account: string, isMissed: boolean) => void;
}

const index: React.FC<Props> = ({
    NickName,
    Account,
    MissingTimes,
    isMissed,
    disPatchChange,
}) => {
    return (
        <div className={`${Style.ScoreItem}`}>
            <div className={`${Style.checkered}`}>
                <span>{NickName}</span>
            </div>
            <div className={`${Style.checkered}`}>
                <span>{Account}</span>
            </div>
            <div className={`${Style.checkered}`}>{MissingTimes}</div>
            <div className={`${Style.checkered}`}>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={isMissed}
                    onChange={(e) => {
                        disPatchChange(Account, e.target.checked);
                    }}
                />
            </div>
        </div>
    );
};

export default index;
