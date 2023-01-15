import React, { useState } from "react";
import Style from "./ScorePage.module.less";
import ScoreFilterBox from "./ScoreFilterBox";
import SwitchButtonBox from "./ScoreFilterBox/SwitchButtonBox";
import FilterInput from "./ScoreFilterBox/FilterInput";
import SubmitButton from "./ScoreFilterBox/SubmitButton";
import ScroeFrom from "./ScoreFrom";
import ScoreFromTitle from "./ScoreFrom/ScoreFromTitle";
import ScoreItem from "./ScoreFrom/ScoreItem";
import FilterStringScope from "./FilterStringScope";
import { nanoid } from "nanoid";
import ScoreListHook from "./ScoreListHook";
import ScoreListUpdateHook from "./ScoreListUpdateHook";
import { toast } from "react-toastify";
export interface ScoreItemType {
    NickName: string;
    Account: string;
    MissingTimes: number;
    isFinished: boolean;
}

const index = () => {
    const [ScoreItemArr, setScoreItem, requestScoreList] = ScoreListHook();
    const [requestScoreListUpdate] = ScoreListUpdateHook(ScoreItemArr);
    const disPatchChange = (Account: string, isFinished: boolean) => {
        const newScoreItemArr = ScoreItemArr.map((item) => {
            item.Account === Account ? (item.isFinished = isFinished) : item;
            return item;
        });
        setScoreItem([...newScoreItemArr]);
    };
    const [isNickNameFilter, setIsNickNameFilter] = useState(true);
    const [isAccountFilter, setIsAccountFilter] = useState(false);
    const [FilterString, setFilterString] = useState("");

    return (
        <div className={`${Style.ScorePage}`}>
            <ScoreFilterBox>
                <SwitchButtonBox
                    isNickNameFilter={isNickNameFilter}
                    isAccountFilter={isAccountFilter}
                    changeAccountFilter={(isAccountFilter) => {
                        setIsAccountFilter(isAccountFilter);
                    }}
                    changeNickNameFilter={(isNickNameFilter) => {
                        setIsNickNameFilter(isNickNameFilter);
                    }}
                />
                <FilterInput
                    FilterString={FilterString}
                    changeFilterString={(FilterString) => {
                        setFilterString(FilterString);
                    }}
                />
                <SubmitButton
                    ClickEvent={() => {
                        requestScoreListUpdate().then((res) => {
                            requestScoreList();
                            toast(res.msg);
                        });
                    }}
                />
            </ScoreFilterBox>
            <ScroeFrom>
                <ScoreFromTitle />
                {ScoreItemArr.filter((item) => {
                    return FilterStringScope(
                        FilterString,
                        isNickNameFilter,
                        isAccountFilter,
                        item
                    );
                }).map((item) => {
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
