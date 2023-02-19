import React from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
import GetLocalAccount from "@/utils/GetLocalAccount";
import stringify from "json-stringify-safe";
import type { LocalCollectionGroupType } from "../../../useLocalCollectionGroupHook";
export default (LocalCollectionGroup: LocalCollectionGroupType) => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestGroupListMaskShare = async () => {
        return fetch(`${BackUrl}/GroupListEncrypt?account=${account}`, {
            method: "Post",
            headers: GetHeaderToken(),
            body: stringify(LocalCollectionGroup),
        }).then((res) => res.json());
    };
    return [requestGroupListMaskShare];
};
