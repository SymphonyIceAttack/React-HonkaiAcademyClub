import React, { useState } from "react";
import FilterStringUtil from "@/utils/FilterStringUtil";
import Style from "./IllustratedBookDisplay.module.less";
import FilterTitleBox from "./FilterTitleBox";
import EquipmentForecastHook from "./EquipmentForecastHook";
import InputBox from "./FilterTitleBox/InputBox";
import SwitchButton from "./FilterTitleBox/SwitchButton";
import ForecastContainer from "./ForecastContainer";
import ForecastList from "./ForecastContainer/ForecastList";
import ForecastEchartsContainer from "./ForecastContainer/ForecastEchartsContainer";
export type EquipmentItemType = {
    Equipment: string;
    DateList: number[];
};
const index = () => {
    const [FilterString, setFilterString] = useState("");
    const [EquipmentForecast] = EquipmentForecastHook();
    const [choseEquipMent, seTchoseEquipMent] = useState("");
    const [isEuipmentListShow, setIsEuipmentListShow] = useState(true);
    return (
        <div className={`${Style.IllustratedBookDisplay}`}>
            <FilterTitleBox>
                <InputBox
                    FilterString={FilterString}
                    changeFilterString={(value) => {
                        setFilterString(value);
                    }}
                />
                <SwitchButton
                    ClickEvent={(isShow) => {
                        setIsEuipmentListShow(isShow);
                    }}
                    isShow={isEuipmentListShow}
                />
            </FilterTitleBox>
            <ForecastContainer>
                <ForecastList
                    isShow={isEuipmentListShow}
                    ClickEvent={(value) => {
                        seTchoseEquipMent(value);
                    }}
                    EquipmentForecast={EquipmentForecast.filter((item) => {
                        return (
                            FilterStringUtil(FilterString, item.Equipment) > -1
                        );
                    }).sort(
                        (itemA, itemB) =>
                            itemB.DateList.length - itemA.DateList.length
                    )}
                />

                <ForecastEchartsContainer
                    EquipmentList={EquipmentForecast}
                    choseEquipMent={choseEquipMent}
                />
            </ForecastContainer>
        </div>
    );
};

export default index;
