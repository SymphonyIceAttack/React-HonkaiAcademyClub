import React from "react";

export default (): [
    (BackUrl: string) => Promise<{ isvalidateUrl: boolean }>
] => {
    const requestValidateBackedUrl = async (
        BackUrl: string
    ): Promise<{
        isvalidateUrl: boolean;
    }> => {
        return fetch(`${BackUrl}/validateBackedUrl`, {
            method: "Post",
        })
            .then((res) => res.json())
            .then((res) => {
                return {
                    isvalidateUrl: true,
                };
            })
            .catch((err) => {
                return {
                    isvalidateUrl: false,
                };
            });
    };
    return [requestValidateBackedUrl];
};
