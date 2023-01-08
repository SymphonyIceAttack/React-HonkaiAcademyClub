import React from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import { TOKEN } from "@/utils/Localkey";
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
            headers: {
                authorization: `Bearer ${
                    localStorage.getItem(TOKEN) || "Bearer "
                }`,
            },
        }).then((res) => res.json());
    };
    return [requestValidateUser];
};
