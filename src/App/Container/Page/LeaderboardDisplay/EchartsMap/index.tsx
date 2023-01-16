import React, { useEffect, useRef } from "react";
import Style from "./EchartsMap.module.less";
import * as echarts from "echarts";
type EChartsOptionType = echarts.EChartsOption;

const index: React.FC<{ EChartsOption: EChartsOptionType; Length: number }> = ({
    EChartsOption,
    Length,
}) => {
    const EchartsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const chartDom = EchartsRef.current!;
        const myChart = echarts.init(chartDom);
        EChartsOption && myChart.setOption(EChartsOption);
    }, []);
    return (
        <div
            className={`${Style.EchartsMap}`}
            ref={EchartsRef}
            style={{
                height: Length * 50 + "px",
            }}></div>
    );
};

export default index;
