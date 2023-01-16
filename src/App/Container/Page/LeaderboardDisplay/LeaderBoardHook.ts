import React, { useEffect, useState } from "react";
import GetLocalAccount from "@/utils/GetLocalAccount";
import GetHeaderToken from "@/utils/GetHeaderToken";
import useBackUrlHook from "@/hook/useBackUrlHook";
type LeaderBoardItem = {
    nickName: string;
    MissingTimes: number;
};

export default (): [boolean, LeaderBoardItem[]] => {
    const [isLoading, setisLoading] = useState(true);
    const [LeaderBoardList, setLeaderBoardList] = useState<LeaderBoardItem[]>(
        []
    );
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestLeaderBoardlist = async () => {
        setisLoading(true);
        return fetch(`${BackUrl}/LeaderBoard?account=${account}`, {
            method: "Post",
            headers: GetHeaderToken(),
        })
            .then((res) => res.json())
            .then(
                (res: {
                    LeaderBoardList: LeaderBoardItem[];
                    status: number;
                }) => {
                    setisLoading(false);
                    setLeaderBoardList(res.LeaderBoardList);
                    return res;
                }
            );
    };
    useEffect(() => {

        requestLeaderBoardlist();
    }, []);
    return [isLoading, LeaderBoardList];
};
