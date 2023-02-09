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

export default (): [
    EquipMentAllListType,
    React.Dispatch<React.SetStateAction<EquipMentAllListType>>
] => {
    const [EquipMentAllList, setEquipMentAllList] =
        useState<EquipMentAllListType>({
            arms: [
                {
                    clientId: nanoid(),
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: nanoid(),
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: nanoid(),
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
            ],
            badge: [
                {
                    clientId: nanoid(),
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: nanoid(),
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
                {
                    clientId: nanoid(),
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
            ],
            clothing: [
                {
                    clientId: nanoid(),
                    type: "服装",
                    ImgSrc: "",
                    equipMentUid: "",
                    title: "",
                    cost: 0,
                },
            ],
            pet: [
                {
                    clientId: nanoid(),
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
