import React, { useState } from "react";
import { nanoid } from "nanoid";

export type EquipMentOneListType = {
    type: string;
    clientId: string;
    ImgSrc: string;
    equipMentUid: string;
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
                },
                {
                    clientId: nanoid(),
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                },
                {
                    clientId: nanoid(),
                    type: "武器",
                    ImgSrc: "",
                    equipMentUid: "",
                },
            ],
            badge: [
                {
                    clientId: nanoid(),
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                },
                {
                    clientId: nanoid(),
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                },
                {
                    clientId: nanoid(),
                    type: "徽章",
                    ImgSrc: "",
                    equipMentUid: "",
                },
            ],
            clothing: [
                {
                    clientId: nanoid(),
                    type: "服装",
                    ImgSrc: "",
                    equipMentUid: "",
                },
            ],
            pet: [
                {
                    clientId: nanoid(),
                    type: "使魔",
                    ImgSrc: "",
                    equipMentUid: "",
                },
            ],
        });

    return [EquipMentAllList, setEquipMentAllList];
};
