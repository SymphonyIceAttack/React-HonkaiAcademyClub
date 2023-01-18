import React, { useEffect } from "react";
import GetLocalAccount from "@/utils/GetLocalAccount";
import GetHeaderToken from "@/utils/GetHeaderToken";
import useBackUrlHook from "@/hook/useBackUrlHook";

export default () => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    useEffect(() => {
        fetch(`${BackUrl}/IllustratedBook?account=${account}`, {
            method: "Get",
            headers: GetHeaderToken(),
        });
    }, []);
};
