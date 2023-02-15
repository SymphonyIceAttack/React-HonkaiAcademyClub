import React, { useState } from "react";

export type FantasySkillType = {
    ExclusiveGeneral: string;
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
            ExclusiveGeneral: "",
            category: "主动",
            value: "",
            id: PrivateKey + "A",
        },
        {
            ExclusiveGeneral: "",
            category: "被动",
            value: "",
            id: PrivateKey + "B",
        },
        {
            ExclusiveGeneral: "",
            category: "被动",
            value: "",
            id: PrivateKey + "C",
        },
        {
            ExclusiveGeneral: "",
            category: "被动",
            value: "",
            id: PrivateKey + "D",
        },
    ]);

    return [FantasySkillList, setFantasySkillList];
};
