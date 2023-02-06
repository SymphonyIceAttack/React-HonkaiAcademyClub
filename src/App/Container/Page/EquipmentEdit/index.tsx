import React, { useCallback, useState } from "react";
import Style from "./EquipmentEdit.module.less";
import EquipmnetEditContainer from "./EquipmnetEditContainer";
import EquipMentItem from "./EquipmnetEditContainer/EquipMentItem";
import EuipMentChoseList from "./EuipMentChoseList";
import type { EquipmentType } from "@/Types/EquipeMentType";
import useEquioMentAllListHook from "./useEquioMentAllListHook";
import TransformTypeKey from "./TransformTypeKey";

const index = () => {
    const [EquipMentAllList, setEquipMentAllList] = useEquioMentAllListHook();
    const [isEquipMentListShow, setisEquipMentListShow] = useState(true);
    const [EquipCurrentMenttType, setEquipCurrentMenttType] =
        useState<EquipmentType | null>("使魔");
    const [currentClientId, setcurrentClientId] = useState("");
    const EquiMetItemClick = (type: EquipmentType, clientId: string) => {
        setisEquipMentListShow((isShow) => !isShow);
        setEquipCurrentMenttType(type);
        const typeKey = TransformTypeKey(type);
        const EquipMentOneList = EquipMentAllList[typeKey];
        EquipMentOneList.forEach((item) => {
            item.clientId == clientId ? setcurrentClientId(clientId) : null;
        });
    };

    return (
        <div className={`${Style.EquipmentEdit}`}>
            <EquipmnetEditContainer
                getArmsList={() =>
                    EquipMentAllList.arms.map((item) => (
                        <EquipMentItem
                            type={"武器"}
                            key={item.clientId}
                            clientId={item.clientId}
                            clickEvent={EquiMetItemClick}
                        />
                    ))
                }
                getBadgeList={() =>
                    EquipMentAllList.badge.map((item) => (
                        <EquipMentItem
                            type={"徽章"}
                            clientId={item.clientId}
                            key={item.clientId}
                            clickEvent={EquiMetItemClick}
                        />
                    ))
                }
                getClothingItem={() =>
                    EquipMentAllList.clothing.map((item) => (
                        <EquipMentItem
                            type={"服装"}
                            clientId={item.clientId}
                            key={item.clientId}
                            clickEvent={EquiMetItemClick}
                        />
                    ))
                }
                getPetItem={() =>
                    EquipMentAllList.pet.map((item) => (
                        <EquipMentItem
                            type={"使魔"}
                            clientId={item.clientId}
                            key={item.clientId}
                            clickEvent={EquiMetItemClick}
                        />
                    ))
                }
            />
            <EuipMentChoseList
                currentClientId={currentClientId}
                EquipCurrentMenttType={EquipCurrentMenttType}
                isEquipMentListShow={isEquipMentListShow}
                closeEvent={() => {
                    setisEquipMentListShow(false);
                }}
                ChoseFinishEvent={(EquimentMessage) => {
                    const typeKey = TransformTypeKey(EquipCurrentMenttType!);
                    const EquipMentOneList = structuredClone(
                        EquipMentAllList[typeKey]
                    );
                    EquipMentOneList.forEach((item) => {
                        //EquimentMessage
                        if (item.clientId == currentClientId) {
                            console.log(item);
                        }
                    });
                    const copyList = structuredClone(EquipMentAllList);
                    copyList[typeKey] = EquipMentOneList;
                    setEquipMentAllList(copyList);
                }}
            />
        </div>
    );
};

export default index;
