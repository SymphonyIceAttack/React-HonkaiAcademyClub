import React, { useEffect, useState } from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
import GetLocalAccount from "@/utils/GetLocalAccount";
export type FantasySkillImgItemType = {
    imgSrc: string;
};
export default (): [FantasySkillImgItemType[], () => Promise<any>] => {
    const [FantasySkillImgList, setFantasySkillImgList] = useState<
        FantasySkillImgItemType[]
    >([]);
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestFantasySkillImgList = async () => {
        return fetch(`${BackUrl}/FantasySkillALLImg?account=${account}`, {
            headers: GetHeaderToken(),
        }).then((res) => res.json());
    };
    useEffect(() => {
        requestFantasySkillImgList().then(
            (res: { FantasySkillALLImg: FantasySkillImgItemType[] }) => {
                setFantasySkillImgList(res.FantasySkillALLImg);
            }
        );
    }, []);
    return [FantasySkillImgList, requestFantasySkillImgList];
};
