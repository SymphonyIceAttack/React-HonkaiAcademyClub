import React from "react";
import Style from "./ForecastNameItem.module.less";
interface Props {
    EquimentName: string;
    ClickEvent: (value: string) => void;
}
const index: React.FC<Props> = ({ EquimentName, ClickEvent }) => {
    return (
        <div
            onClick={() => {
                ClickEvent(EquimentName);
            }}
            className={`${Style.ForecastNameItem}`}>
            {EquimentName}
        </div>
    );
};

export default index;
