import React from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
interface Message {
    staus: number;
    account: string;
    token: string;
    data: string;
}
export default (): [() => Promise<Message>] => {
    const [BackUrl] = useBackUrlHook();
    const requestValidateUser = async (): Promise<Message> => {
        return fetch(`${BackUrl}/ValidateUser`, {
            method: "Post",
            headers: GetHeaderToken(),
        }).then((res) => res.json());
    };
    return [requestValidateUser];
};
