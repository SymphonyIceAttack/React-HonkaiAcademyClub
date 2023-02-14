import React, { useState } from "react";

export type DemonLinkType = {
    LinkLv: string;
    content: string;
    id: string;
};
export default (
    PrivateKey: string
): [DemonLinkType[], React.Dispatch<React.SetStateAction<DemonLinkType[]>>] => {
    const [DemonLinkList, setDemonLinkList] = useState<DemonLinkType[]>([
        {
            LinkLv: "0",
            content: "全伤",
            id: PrivateKey + "A",
        },
        {
            LinkLv: "0",
            content: "暴击率",
            id: PrivateKey + "B",
        },
        {
            LinkLv: "0",
            content: "闪避",
            id: PrivateKey + "C",
        },
        {
            LinkLv: "0",
            content: "减伤",
            id: PrivateKey + "D",
        },
        {
            LinkLv: "0",
            content: "暴击伤害",
            id: PrivateKey + "E",
        },
        {
            LinkLv: "0",
            content: "攻速",
            id: PrivateKey + "F",
        },
        {
            LinkLv: "0",
            content: "移速",
            id: PrivateKey + "G",
        },
        {
            LinkLv: "0",
            content: "物理",
            id: PrivateKey + "H",
        },
        {
            LinkLv: "0",
            content: "能量",
            id: PrivateKey + "I",
        },
        {
            LinkLv: "0",
            content: "冰",
            id: PrivateKey + "L",
        },
        {
            LinkLv: "0",
            content: "火",
            id: PrivateKey + "M",
        },
        {
            LinkLv: "0",
            content: "电",
            id: PrivateKey + "N",
        },
        {
            LinkLv: "0",
            content: "毒",
            id: PrivateKey + "O",
        },
    ]);
    return [DemonLinkList, setDemonLinkList];
};
