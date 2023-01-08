import React, { useState } from "react";
import Style from "./DownButtonList.module.less";
interface Props {
    children: React.ReactNode[] | React.ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
    const [isHide, setisHide] = useState(true);
    return (
        <div className={`${Style.DownButtonList}`}>
            <button
                onClick={() => {
                    setisHide((state) => !state);
                }}>
                用户列表
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
