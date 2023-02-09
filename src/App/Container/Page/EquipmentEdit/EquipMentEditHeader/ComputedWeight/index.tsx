import React, { useEffect, useState } from "react";
import Style from "./ComputedWeight.module.less";
import type { EquipMentAllListType } from "../../useEquipMentAllListHook";
interface Props {
    EquipMentAllList: EquipMentAllListType;
}
const index: React.FC<Props> = ({ EquipMentAllList }) => {
    const [CalculateWeight, setCalculateWeight] = useState(0);
    useEffect(() => {
        let allWeight = 0;
        EquipMentAllList.arms.forEach((item) => {
            allWeight += item.cost;
        });
        EquipMentAllList.badge.forEach((item) => {
            allWeight += item.cost;
        });
        EquipMentAllList.clothing.forEach((item) => {
            allWeight += item.cost;
        });

        EquipMentAllList.pet.forEach((item) => {
            allWeight += item.cost;
        });
        setCalculateWeight(allWeight);
    }, [EquipMentAllList]);

    return <div className={`${Style.ComputedWeight}`}>当前负重 {CalculateWeight}</div>;
};

export default index;
