import React, { useEffect, useState } from "react";
import Style from "./ScorePage.module.less";
import ScoreFilterBox from "./ScoreFilterBox";
import SwitchButtonBox from "./ScoreFilterBox/SwitchButtonBox";
import FilterInput from "./ScoreFilterBox/FilterInput";
import SubmitButton from "./ScoreFilterBox/SubmitButton";
import DownButtonList from "./ScoreFilterBox/DownButtonList";
import DownButtonItem from "./ScoreFilterBox/DownButtonList/DownButtonItem";
import ScroeFrom from "./ScoreFrom";
import ScoreFromTitle from "./ScoreFrom/ScoreFromTitle";
import ScoreItem from "./ScoreFrom/ScoreItem";
import FilterStringScope from "./FilterStringScope";
import { nanoid } from "nanoid";
import ScoreListHook from "./ScoreListHook";
import ScoreListUpdateHook from "./ScoreListUpdateHook";
import { toast } from "react-toastify";
import useAllTimeStampHook from "./useAllTimeStampHook";
import moment from "moment";

export interface ScoreItemType {
    NickName: string;
    Account: string;
    MissingTimes: number;
    isMissed: boolean;
    timeStamp: number;
}

const index = () => {
    const [ScoreItemArr, setScoreItem, requestScoreList] = ScoreListHook();
    const [choseTimeStamp, setChoseTimeStamp] = useState<number>(
        new Date().getTime() / 1000
    );
    const [TimeStampList, requesAllStampList] = useAllTimeStampHook();
    const [requestScoreListUpdate] = ScoreListUpdateHook(
        ScoreItemArr,
        choseTimeStamp
    );
    const disPatchChange = (Account: string, isMissed: boolean) => {
        const newScoreItemArr = ScoreItemArr.map((item) => {
            item.Account === Account ? (item.isMissed = isMissed) : item;
            return item;
        });
        setScoreItem([...newScoreItemArr]);
    };

    useEffect(() => {
        requestScoreList(choseTimeStamp + "");
    }, [choseTimeStamp]);
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
                <DownButtonList
                    ChoseTimeStamp={choseTimeStamp}
                    length={TimeStampList.length}>
                    {TimeStampList.map((timeStamp) => {
                        return (
                            <DownButtonItem
                                ClickEvent={() => {
                                    setChoseTimeStamp(parseFloat(timeStamp));
                                }}
                                content={moment
                                    .unix(parseFloat(timeStamp))
                                    .format("MM/DD/YYYY")}
                                key={nanoid()}
                            />
                        );
                    })}
                </DownButtonList>
                <SubmitButton
                    ClickEvent={() => {
                        requestScoreListUpdate().then((res) => {
                            setChoseTimeStamp(new Date().getTime() / 1000);
                            requesAllStampList();
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
