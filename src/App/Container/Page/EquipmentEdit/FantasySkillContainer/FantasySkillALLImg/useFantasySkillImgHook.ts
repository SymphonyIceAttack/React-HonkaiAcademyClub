import React, { useEffect, useState } from "react";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
import GetLocalAccount from "@/utils/GetLocalAccount";
type FantasySkillImgItem = {
    imgSrc: string;
};
export default (): [FantasySkillImgItem[], () => Promise<any>] => {
    const [FantasySkillImgList, setFantasySkillImgList] = useState<
        FantasySkillImgItem[]
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
            (res: { FantasySkillALLImg: FantasySkillImgItem[] }) => {
                setFantasySkillImgList(res.FantasySkillALLImg);
            }
        );
    }, []);
    return [FantasySkillImgList, requestFantasySkillImgList];
};
