import React from "react";
import Style from "./ForecastList.module.less";
import type { EquipmentItemType } from "../../index";
import ForecastNameItem from "./ForecastNameItem";
import { nanoid } from "nanoid";
interface Props {
    isShow: boolean;
    EquipmentForecast: EquipmentItemType[];
    ClickEvent: (value: string) => void;
}
const index: React.FC<Props> = ({ EquipmentForecast, ClickEvent, isShow }) => {
    return (
        <div
            className={`${Style.ForecastList}`}
            style={{
                width: isShow ? "250px" : "0px",
                overflow: isShow ? "scroll" : "hidden",
            }}>
            {EquipmentForecast.map((item) => {
                return (
                    <ForecastNameItem
                        ClickEvent={ClickEvent}
                        key={nanoid()}
                        EquimentName={item.Equipment}
                    />
                );
            })}
        </div>
    );
};

export default index;
