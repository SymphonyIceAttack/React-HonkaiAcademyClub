import React from "react";
import Style from "./LocalCollectionGroupList.module.less";
import LocalCollectionGroupListHeader from "./LocalCollectionGroupListHeader";
import LocalCollectionGroupItem from "./LocalCollectionGroupItem";
import type {
    LocalCollectionMaskShareItemType,
    LocalCollectionGroupType,
} from "../../useLocalCollectionGroupHook";
interface Props {
    LocalCollectionGroupOneList: LocalCollectionGroupType;
    Name: string;
    id: string;
    LocalCollectionMaskShareList: LocalCollectionMaskShareItemType[];
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
    LocalCollectionGroupOneList,
    Name,
    id,
    LocalCollectionMaskShareList,
    CreateMaskItemEvent,
    SaveGroupListName,
    SaveGroupItemName,
    DeleteGroupItem,
}) => {
    return (
        <div className={`${Style.LocalCollectionGroupList}`}>
            <LocalCollectionGroupListHeader
                LocalCollectionGroupOneList={LocalCollectionGroupOneList}
                id={id}
                CreateMaskItemEvent={CreateMaskItemEvent}
                SaveGroupListName={SaveGroupListName}
                MaskShareLength={LocalCollectionMaskShareList.length}
                GrouplistName={Name}
            />
            {LocalCollectionMaskShareList.map((item) => (
                <LocalCollectionGroupItem
                    GrouId={id}
                    id={item.id}
                    key={item.id}
                    MaskShare={item.MaskShare}
                    Name={item.Name}
                    SaveGroupItemName={SaveGroupItemName}
                    DeleteGroupItem={DeleteGroupItem}
                />
            ))}
        </div>
    );
};

export default index;
