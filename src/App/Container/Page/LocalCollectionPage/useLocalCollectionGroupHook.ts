import React, { useEffect, useState } from "react";
import { LOCALCOLLECTIONGROUPLIST } from "@/utils/Localkey";
import stringify from "json-stringify-safe";
export type LocalCollectionMaskShareItemType = {
    id: string;
    Name: string;
    MaskShare: string;
};
export type LocalCollectionGroupType = {
    Name: string;
    id: string;
    LocalCollectionMaskShareList: LocalCollectionMaskShareItemType[];
};
export default (): [
    LocalCollectionGroupType[],
    React.Dispatch<React.SetStateAction<LocalCollectionGroupType[]>>
] => {
    const [LocalCollectionGroup, setLocalCollectionGroup] = useState<
        LocalCollectionGroupType[]
    >([]);
    useEffect(() => {
        const LocalList = localStorage.getItem(LOCALCOLLECTIONGROUPLIST);
        const CollectionGroupForLocal = JSON.parse(
            LocalList === null ? "[]" : LocalList
        ) as Array<LocalCollectionGroupType>;

        CollectionGroupForLocal.length !== 0 &&
            setLocalCollectionGroup(CollectionGroupForLocal);
    }, []);
    useEffect(() => {
        localStorage.setItem(
            LOCALCOLLECTIONGROUPLIST,
            stringify(LocalCollectionGroup)
        );
    }, [LocalCollectionGroup]);

    return [LocalCollectionGroup, setLocalCollectionGroup];
};
