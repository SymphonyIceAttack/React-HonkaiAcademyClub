import React from "react";
import Style from "./LeaderboardDisplay.module.less";
import EchartsMap from "./EchartsMap";
import LeaderBoardHook from "./LeaderBoardHook";
type EChartsOption = echarts.EChartsOption;
const index = () => {
    const [isLoading, LeaderBoardList] = LeaderBoardHook();
    const option: EChartsOption = {
        title: {
            text: "",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {},
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
        },
        yAxis: {
            type: "category",
            data: [...LeaderBoardList.map((item) => item.nickName)],
        },
        series: [
            {
                name: "摸鱼次数",
                type: "bar",
                data: [...LeaderBoardList.map((item) => item.MissingTimes)],
            },
        ],
    };

    return (
        <div className={`${Style.LeaderboardDisplay}`}>
            {isLoading ? null : (
                <EchartsMap
                    Length={LeaderBoardList.length}
                    EChartsOption={option}
                />
            )}
        </div>
    );
};

export default index;
