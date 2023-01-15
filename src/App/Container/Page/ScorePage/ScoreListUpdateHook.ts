import React from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetLocalAccount from "@/utils/GetLocalAccount";
import GetHeaderToken from "@/utils/GetHeaderToken";
import type { ScoreItemType } from "./index";
export default (
    ScoreList: ScoreItemType[]
): [() => Promise<{ msg: string; status: number }>] => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestScoreListUpdate = async () => {
        return fetch(`${BackUrl}/ScoreListUpdate?account=${account}`, {
            method: "Post",
            headers: GetHeaderToken(),
            body: JSON.stringify(ScoreList),
        }).then((res) => res.json());
    };
    return [requestScoreListUpdate];
};
