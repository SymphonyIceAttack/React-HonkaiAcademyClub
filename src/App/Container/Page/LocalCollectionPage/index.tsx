import React from "react";
import Style from "./LocalCollectionPage.module.less";
import LocalCollectionHeader from "./LocalCollectionHeader";
import LocalCollectionContainer from "./LocalCollectionContainer";
import useLocalCollectionGroupHook from "./useLocalCollectionGroupHook";
import { nanoid } from "nanoid";
import type {
    LocalCollectionGroupType,
    LocalCollectionMaskShareItemType,
} from "./useLocalCollectionGroupHook";
const index = () => {
    const [LocalCollectionGroup, setLocalCollectionGroup] =
        useLocalCollectionGroupHook();

    return (
        <div className={`${Style.LocalCollectionPage}`}>
            <LocalCollectionHeader
                CreateEvent={() => {
                    const NewLocalCollectionGroup: LocalCollectionGroupType[] =
                        [
                            ...LocalCollectionGroup,
                            {
                                id: nanoid(),
                                Name: "",
                                LocalCollectionMaskShareList: [],
                            },
                        ];
                    setLocalCollectionGroup(NewLocalCollectionGroup);
                }}
                DownLoadEvent={(LocalCollectionGroupOneList) => {
                    const NewLocalCollectionGroup: LocalCollectionGroupType[] =
                        [...LocalCollectionGroup, LocalCollectionGroupOneList];
                    setLocalCollectionGroup(NewLocalCollectionGroup);
                }}
            />
            <LocalCollectionContainer
                CreateMaskItemEvent={(GroupId, MaskShare) => {
                    const NewLocalCollectionGroup: LocalCollectionGroupType[] =
                        [...LocalCollectionGroup];
                    NewLocalCollectionGroup.forEach((item) => {
                        if (item.id === GroupId) {
                            const newLocalCollectionMaskShareList: LocalCollectionMaskShareItemType[] =
                                [
                                    ...item.LocalCollectionMaskShareList,
                                    {
                                        id: nanoid(),
                                        Name: "",
                                        MaskShare,
                                    },
                                ];
                            item.LocalCollectionMaskShareList =
                                newLocalCollectionMaskShareList;
                        }
                    });
                    setLocalCollectionGroup(NewLocalCollectionGroup);
                }}
                SaveGroupListName={(GroupId, GroupListName) => {
                    const NewLocalCollectionGroup: LocalCollectionGroupType[] =
                        [...LocalCollectionGroup];
                    NewLocalCollectionGroup.forEach((item) => {
                        if (item.id === GroupId) {
                            item.Name = GroupListName;
                        }
                    });
                    setLocalCollectionGroup(NewLocalCollectionGroup);
                }}
                SaveGroupItemName={(GroupId, ItemId, ItemName) => {
                    const NewLocalCollectionGroup: LocalCollectionGroupType[] =
                        [...LocalCollectionGroup];
                    NewLocalCollectionGroup.forEach((item) => {
                        if (item.id === GroupId) {
                            const newLocalCollectionMaskShareList: LocalCollectionMaskShareItemType[] =
                                [...item.LocalCollectionMaskShareList];
                            newLocalCollectionMaskShareList.forEach(
                                (MaskItem) => {
                                    if (MaskItem.id === ItemId) {
                                        MaskItem.Name = ItemName;
                                    }
                                }
                            );
                            item.LocalCollectionMaskShareList =
                                newLocalCollectionMaskShareList;
                        }
                    });
                    setLocalCollectionGroup(NewLocalCollectionGroup);
                }}
                DeleteGroupItem={(GroupId, ItemId) => {
                    const NewLocalCollectionGroup: LocalCollectionGroupType[] =
                        [...LocalCollectionGroup];
                    NewLocalCollectionGroup.forEach((item) => {
                        if (item.id === GroupId) {
                            const newLocalCollectionMaskShareList: LocalCollectionMaskShareItemType[] =
                                item.LocalCollectionMaskShareList.filter(
                                    (MaskItem) => MaskItem.id !== ItemId
                                );

                            item.LocalCollectionMaskShareList =
                                newLocalCollectionMaskShareList;
                        }
                    });
                    setLocalCollectionGroup(NewLocalCollectionGroup);
                }}
                DeleteGroupListEvent={(GroupId) => {
                    const NewLocalCollectionGroup: LocalCollectionGroupType[] =
                        [...LocalCollectionGroup];

                    setLocalCollectionGroup(
                        NewLocalCollectionGroup.filter((item) => {
                            return item.id !== GroupId;
                        })
                    );
                }}
                LocalCollectionGroup={LocalCollectionGroup}
            />
        </div>
    );
};

export default index;
