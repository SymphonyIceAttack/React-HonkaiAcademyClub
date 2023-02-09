import React from "react";
import Style from "./SwitchButtonBox.module.less";


interface Props {
    isMasterShow: boolean;
    isSpareShow: boolean;
    changeMasterShow: (isMasterShow: boolean) => void;
    changeSpareShow: (isSpareShow: boolean) => void;
}
const index: React.FC<Props> = ({
    isMasterShow,
    isSpareShow,
    changeMasterShow,
    changeSpareShow,
}) => {
    return (
        <div
            className={`${Style.SwitchButtonBox}`}
            onClick={() => {
                changeMasterShow(!isMasterShow);
                changeSpareShow(!isSpareShow);
            }}>
            <button className={`${isMasterShow ? Style.active : ""}`}>
                主套编辑
            </button>
            <button className={`${isSpareShow ? Style.active : ""}`}>
                备用编辑
            </button>
        </div>
    );
};

export default index;
