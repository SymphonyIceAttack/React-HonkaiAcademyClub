import React, { useState, useEffect } from "react";
import type { ScoreItemType } from "./index";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetLocalAccount from "@/utils/GetLocalAccount";
import GetHeaderToken from "@/utils/GetHeaderToken";
export default (): [
    ScoreItemType[],
    React.Dispatch<React.SetStateAction<ScoreItemType[]>>,
    () => Promise<void>
] => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const [ScoreItemArr, setScoreItem] = useState<ScoreItemType[]>([]);
    const requestScoreList = async () => {
        fetch(
            `${BackUrl}/ScoreList?account=${account}&timeStamp=${new Date().getTime()}`,
            {
                method: "Post",
                headers: GetHeaderToken(),
            }
        )
            .then((res) => res.json())
            .then((res: { UserScoreList: ScoreItemType[]; status: number }) => {
                setScoreItem(res.UserScoreList);
            });
    };
    useEffect(() => {
        requestScoreList();
    }, []);

    return [ScoreItemArr, setScoreItem, requestScoreList];
};
