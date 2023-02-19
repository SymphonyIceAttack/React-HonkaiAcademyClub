import React from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
import GetLocalAccount from "@/utils/GetLocalAccount";
export default (GroupMaskShare: string) => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestGroupListDownLoadMaskShare = async () => {
        return fetch(
            `${BackUrl}/GroupListDecrypt?account=${account}&GroupMaskShare=${GroupMaskShare}`,
            {
                method: "Post",
                headers: GetHeaderToken(),
            }
        ).then((res) => res.json());
    };
    return [requestGroupListDownLoadMaskShare];
};
