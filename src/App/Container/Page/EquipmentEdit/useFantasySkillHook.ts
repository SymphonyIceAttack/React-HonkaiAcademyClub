import React, { useState } from "react";

export type FantasySkillType = {
    category: string;
    value: string;
    id: string;
};
export default (
    PrivateKey: string
): [
    FantasySkillType[],
    React.Dispatch<React.SetStateAction<FantasySkillType[]>>
] => {
    const [FantasySkillList, setFantasySkillList] = useState<
        FantasySkillType[]
    >([
        {
            category: "主动",
            value: "",
            id: PrivateKey + "A",
        },
        {
            category: "被动",
            value: "",
            id: PrivateKey + "B",
        },
        {
            category: "被动",
            value: "",
            id: PrivateKey + "C",
        },
        {
            category: "被动",
            value: "",
            id: PrivateKey + "D",
        },
    ]);

    return [FantasySkillList, setFantasySkillList];
};
