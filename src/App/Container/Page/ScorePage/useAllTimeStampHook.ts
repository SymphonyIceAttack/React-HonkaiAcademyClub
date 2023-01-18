import React, { useEffect, useState } from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetLocalAccount from "@/utils/GetLocalAccount";
import GetHeaderToken from "@/utils/GetHeaderToken";

export default (): [
    string[],
    () => Promise<{
        allTimeStamp: string[];
        status: number;
    }>
] => {
    const [TimeStampList, setTimeStampList] = useState<string[]>([]);
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requesAllStampList = async () => {
        return fetch(`${BackUrl}/TimeStamp?account=${account}`, {
            method: "Post",
            headers: GetHeaderToken(),
        })
            .then((res) => res.json())
            .then((res: { allTimeStamp: string[]; status: number }) => {
                setTimeStampList(res.allTimeStamp);
                return res;
            });
    };
    useEffect(() => {
        requesAllStampList();
    }, []);

    return [TimeStampList, requesAllStampList];
};
