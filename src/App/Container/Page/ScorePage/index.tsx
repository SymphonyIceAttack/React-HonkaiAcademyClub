import React, { useState } from "react";
import Style from "./ScorePage.module.less";
import ScroeFrom from "./ScoreFrom";
import ScoreFromTitle from "./ScoreFrom/ScoreFromTitle";
import ScoreItem from "./ScoreFrom/ScoreItem";

import { nanoid } from "nanoid";
export interface ScoreItemType {
    NickName: string;
    Account: string;
    MissingTimes: number;
    isFinished: boolean;
}

const index = () => {
    const [ScoreItemArr, setScoreItem] = useState<ScoreItemType[]>([
        {
            NickName: "1",
            Account: "1",
            MissingTimes: 0,
            isFinished: false,
        },
        {
            NickName: "2",
            Account: "2",
            MissingTimes: 0,
            isFinished: false,
        },
        {
            NickName: "3",
            Account: "3",
            MissingTimes: 0,
            isFinished: false,
        },
    ]);

    const disPatchChange = (Account: string, isFinished: boolean) => {
        const newScoreItemArr = ScoreItemArr.map((item) => {
            item.Account === Account ? (item.isFinished = isFinished) : item;
            return item;
        });
        setScoreItem([...newScoreItemArr]);
    };
    return (
        <div className={`${Style.ScorePage}`}>
            <ScroeFrom>
                <ScoreFromTitle />
                {ScoreItemArr.map((item) => {
                    return (
                        <ScoreItem
                            key={nanoid()}
                            {...item}
                            disPatchChange={disPatchChange}
                        />
                    );
                })}
            </ScroeFrom>
        </div>
    );
};

export default index;
