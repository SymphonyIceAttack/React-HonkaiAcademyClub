import React from "react";
import Style from "./ForecastContainer.module.less";
interface Props {
    children: React.ReactNode | React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return <div className={`${Style.ForecastContainer}`}>{children}</div>;
};

export default index;
