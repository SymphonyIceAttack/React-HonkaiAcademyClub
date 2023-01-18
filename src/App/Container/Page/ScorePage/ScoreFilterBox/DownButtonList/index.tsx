import React, { useState } from "react";
import Style from "./DownButtonList.module.less";
import moment from "moment";
interface Props {
    children: React.ReactNode[] | React.ReactNode;
    ChoseTimeStamp: number;
    length: number;
}
const index: React.FC<Props> = ({ children, ChoseTimeStamp, length }) => {
    const [isHide, setisHide] = useState(true);
    return (
        <div
            className={`${Style.DownButtonList}`}
            onClick={() => {
                length > 0 && setisHide((state) => !state);
            }}>
            <button>
                {moment.unix(ChoseTimeStamp).format("MM/DD/YYYY") ==
                moment.unix(new Date().getTime() / 1000).format("MM/DD/YYYY")
                    ? "当前时间"
                    : moment.unix(ChoseTimeStamp).format("MM/DD/YYYY")}
            </button>
            <div
                className={`${Style.HideButtonList}`}
                style={{
                    display: isHide ? "none" : "flex",
                }}>
                {children}
            </div>
        </div>
    );
};

export default index;
