import React from "react";
import Style from "./EquipmnetEditContainer.module.less";
interface Props {
    getClothingItem: () => React.ReactNode;
    getPetItem: () => React.ReactNode;
    getArmsList: () => React.ReactNode[];
    getBadgeList: () => React.ReactNode[];
}
const index: React.FC<Props> = ({
    getArmsList,
    getBadgeList,
    getClothingItem,
    getPetItem,
}) => {
    return (
        <div className={`${Style.EquipmnetEditContainer}`}>
            <div className={`${Style.LeftSideContainer}`}>
                {getClothingItem()}
                {getPetItem()}
            </div>
            <div className={`${Style.RightContainer}`}>
                <div className={`${Style.TopContainer}`}>{getArmsList()}</div>
                <div className={`${Style.BotContainer}`}>{getBadgeList()}</div>
            </div>
        </div>
    );
};

export default index;
