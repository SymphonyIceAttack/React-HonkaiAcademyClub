import React, { useEffect, useRef } from "react";
import Style from "./ForecastEchartsContainer.module.less";
import type { EquipmentItemType } from "../../index";
import EquipMentLoadingNotifation from "./EquipMentLoadingNotifation";
type EChartsOption = echarts.EChartsOption;
import * as echarts from "echarts";
import moment from "moment";
interface Props {
    EquipmentList: EquipmentItemType[];
    choseEquipMent: string;
}
const index: React.FC<Props> = ({ EquipmentList, choseEquipMent }) => {
    const EachartRef = useRef<HTMLDivElement>(null);
    const ShowEchartsEquipment = EquipmentList.find(
        (item) => item.Equipment === choseEquipMent
    );
    useEffect(() => {
        if (EachartRef.current !== null) {
            const myChart = echarts.init(EachartRef.current!);
            const option: EChartsOption = {
                title: {
                    text: ShowEchartsEquipment?.Equipment,
                },
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category",
                    data: ShowEchartsEquipment?.DateList.map((item) =>
                        moment.unix(item).format("YYYY/MM/DD")
                    ),
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [
                            ...new Array(
                                ShowEchartsEquipment?.DateList.length!
                            ).keys(),
                        ].map((item) => item + 1),
                        type: "line",
                        smooth: true,
                    },
                ],
            };
            option && myChart.setOption(option);
        }
    }, [choseEquipMent]);
    return (
        <div className={`${Style.ForecastEchartsContainer}`}>
            {ShowEchartsEquipment !== undefined ? (
                <div ref={EachartRef} className={Style.Echart}></div>
            ) : EquipmentList.length === 0 ? (
                <EquipMentLoadingNotifation />
            ) : null}
        </div>
    );
};

export default index;
