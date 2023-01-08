import React, { useState } from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
interface Message {
    msg: string;
    status: number;
    token: string;
}
export default (
    account: string,
    password: string
): [boolean, () => Promise<Message>] => {
    const [isLoading, setIsLoading] = useState(false);
    const [BackUrl] = useBackUrlHook();
    const requestMutation = async (): Promise<Message> => {
        setIsLoading(true);
        return fetch(
            `${BackUrl}/login?account=${account}&password=${password}`,
            {
                method: "Post",
            }
        )
            .then((res) => res.json())
            .then((res) => {
                setIsLoading(false);
                return res;
            });
    };

    return [isLoading, requestMutation];
};
