import React from "react";
import Style from "./SwitchEditContainer.module.less";
import type { EquipMentAllListType } from "../useEquipMentAllListHook";
import type { EquipmentType } from "@/Types/EquipeMentType";
import EquipmnetEditContainer from "../EquipmnetEditContainer";
import EquipMentItem from "../EquipmnetEditContainer/EquipMentItem";
interface Props {
    isMasterShow: boolean;
    MasterEquipMentAllList: EquipMentAllListType;
    SpareEquipMentAllList: EquipMentAllListType;
    isSpareShow: boolean;

    ClickEvent: (type: EquipmentType, clientId: string) => void;
}
const index: React.FC<Props> = ({
    MasterEquipMentAllList,
    isMasterShow,
    SpareEquipMentAllList,
    isSpareShow,
    ClickEvent,
}) => {
    return (
        <div className={`${Style.SwitchEditContainer}`}>
            <EquipmnetEditContainer
                style={{
                    transform: isMasterShow
                        ? `translateY(0%)`
                        : `translateY(-110%)`,
                }}
                getArmsList={() =>
                    MasterEquipMentAllList.arms.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"武器"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
                getBadgeList={() =>
                    MasterEquipMentAllList.badge.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"徽章"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
                getClothingItem={() =>
                    MasterEquipMentAllList.clothing.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"服装"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
                getPetItem={() =>
                    MasterEquipMentAllList.pet.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"使魔"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
            />

            <EquipmnetEditContainer
                style={{
                    transform: isSpareShow
                        ? `translateY(-110%)`
                        : `translateY(0%)`,
                }}
                getArmsList={() =>
                    SpareEquipMentAllList.arms.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"武器"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
                getBadgeList={() =>
                    SpareEquipMentAllList.badge.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"徽章"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
                getClothingItem={() =>
                    SpareEquipMentAllList.clothing.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"服装"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
                getPetItem={() =>
                    SpareEquipMentAllList.pet.map((item) => (
                        <EquipMentItem
                            {...item}
                            key={item.clientId}
                            type={"使魔"}
                            clickEvent={ClickEvent}
                        />
                    ))
                }
            />
        </div>
    );
};

export default index;
