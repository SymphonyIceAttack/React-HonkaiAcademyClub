import React from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
interface RegisterProps {
    account: string;
    password: string;
    nickname: string;
    avatarImage: string;
    equipmentImage: string;
    MoeChapterImage: string;
}

const validateSrc = (Str: string) => {
    return Str.length < 1000;
};
export default ({
    account,
    password,
    nickname,
    avatarImage,
    equipmentImage,
    MoeChapterImage,
}: RegisterProps): [
    () => Promise<{
        msg: string;
        status: number;
    }>
] => {
    const [BackUrl] = useBackUrlHook();
    const requestRegister = async (): Promise<{
        msg: string;
        status: number;
    }> => {
        if (account === "" || password === "" || nickname === "") {
            return {
                msg: "信息为空",
                status: 201,
            };
        }

        if (
            validateSrc(MoeChapterImage) ||
            validateSrc(equipmentImage) ||
            validateSrc(avatarImage)
        ) {
            return {
                msg: "图片未上传",
                status: 202,
            };
        }
        const data = new FormData();
        data.append(
            "json",
            JSON.stringify({
                account,
                password,
                nickname,
                avatarImage,
                equipmentImage,
                MoeChapterImage,
            })
        );
        return fetch(`${BackUrl}/register`, {
            method: "Post",
            body: data,
        }).then((res) => res.json());
    };
    return [requestRegister];
};
