import React from "react";
import Style from "./LocalCollectionContainer.module.less";
import LocalCollectionGroupList from "./LocalCollectionGroupList";
import type { LocalCollectionGroupType } from "../useLocalCollectionGroupHook";
import { nanoid } from "nanoid";
interface Props {
    LocalCollectionGroup: LocalCollectionGroupType[];
    CreateMaskItemEvent: (GroupId: string, MaskShare: string) => void;
    SaveGroupListName: (GroupId: string, GroupListName: string) => void;
    SaveGroupItemName: (
        GroupId: string,
        ItemId: string,
        ItemName: string
    ) => void;
    DeleteGroupItem: (GroupId: string, ItemId: string) => void;
}
const index: React.FC<Props> = ({
    LocalCollectionGroup,
    CreateMaskItemEvent,
    SaveGroupListName,
    SaveGroupItemName,
    DeleteGroupItem,
}) => {
    return (
        <div className={`${Style.LocalCollectionContainer}`}>
            {LocalCollectionGroup.map((item) => (
                <LocalCollectionGroupList
                    LocalCollectionGroupOneList={item}
                    key={item.id}
                    Name={item.Name}
                    id={item.id}
                    LocalCollectionMaskShareList={
                        item.LocalCollectionMaskShareList
                    }
                    CreateMaskItemEvent={CreateMaskItemEvent}
                    SaveGroupListName={SaveGroupListName}
                    SaveGroupItemName={SaveGroupItemName}
                    DeleteGroupItem={DeleteGroupItem}
                />
            ))}
        </div>
    );
};

export default index;
