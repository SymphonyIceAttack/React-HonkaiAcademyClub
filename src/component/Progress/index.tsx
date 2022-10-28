import React from "react";
import Style from "./Progress.module.less";

interface Props {
    progress: number;
}
const index: React.FC<Props> = ({ progress }) => {
    return (
        <div className={`${Style.Progress}`}>
            <div
                className={`${Style.content}`}
                style={{
                    width: `${progress}%`,
                }}
            ></div>
        </div>
    );
};

export default index;
