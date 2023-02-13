import React, { useState } from "react";
import { nanoid } from "nanoid";

export type EquipMentOneListType = {
    type: string;
    clientId: string;
    equipMentUid: string;
    ImgSrc: string;
    title: string;
    cost: number;
};
export type EquipMentAllListType = {
    arms: EquipMentOneListType[];
    badge: EquipMentOneListType[];
    clothing: EquipMentOneListType[];
    pet: EquipMentOneListType[];
};

export default (
    PrivateKey: string
): [
    EquipMentAllListType,
    React.Dispatch<React.SetStateAction<EquipMentAllListType>>
] => {
    const [EquipMentAllList, setEquipMentAllList] =
        useState<EquipMentAllListType>({
            arms: [
                {
                    clientId: PrivateKey + "A",
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: PrivateKey + "B",
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: PrivateKey + "C",
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
            ],
            badge: [
                {
                    clientId: PrivateKey + "D",
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: PrivateKey + "E",
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: PrivateKey + "F",
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
            ],
            clothing: [
                {
                    clientId: PrivateKey + "G",
                    type: "服装",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
            ],
            pet: [
                {
                    clientId: PrivateKey + "H",
                    type: "使魔",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
            ],
        });

    return [EquipMentAllList, setEquipMentAllList];
};
