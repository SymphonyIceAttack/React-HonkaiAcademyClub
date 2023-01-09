import React from "react";
import Style from "./ScoreItem.module.less";
import type { ScoreItemType } from "../..";

interface Props extends ScoreItemType {
    disPatchChange: (Account: string, isFinished: boolean) => void;
}

const index: React.FC<Props> = ({
    NickName,
    Account,
    MissingTimes,
    isFinished,
    disPatchChange,
}) => {
    return (
        <div className={`${Style.ScoreItem}`}>
            <div className={`${Style.checkered}`}>{NickName}</div>
            <div className={`${Style.checkered}`}>{Account}</div>
            <div className={`${Style.checkered}`}>{MissingTimes}</div>
            <div className={`${Style.checkered}`}>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={isFinished}
                    onChange={(e) => {
                        disPatchChange(Account,e.target.checked)
                    }}
                />
            </div>
        </div>
    );
};

export default index;
