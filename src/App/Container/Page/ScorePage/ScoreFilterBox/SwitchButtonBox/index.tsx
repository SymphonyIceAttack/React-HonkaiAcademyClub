import React from "react";
import Style from "./SwitchButtonBox.module.less";

//isNickNameFilter isAccountFilter 必须相反
interface Props {
    isNickNameFilter: boolean;
    isAccountFilter: boolean;
    changeNickNameFilter: (isNickNameFilter: boolean) => void;
    changeAccountFilter: (isAccountFilter: boolean) => void;
}
const index: React.FC<Props> = ({
    isNickNameFilter,
    isAccountFilter,
    changeAccountFilter,
    changeNickNameFilter,
}) => {
    return (
        <div
            className={`${Style.SwitchButtonBox}`}
            onClick={() => {
                changeAccountFilter(!isAccountFilter);
                changeNickNameFilter(!isNickNameFilter);
            }}>
            <button className={`${isNickNameFilter ? Style.active : ""}`}>
                昵称筛选
            </button>
            <button className={`${isAccountFilter ? Style.active : ""}`}>
                账号筛选
            </button>
        </div>
    );
};

export default index;
