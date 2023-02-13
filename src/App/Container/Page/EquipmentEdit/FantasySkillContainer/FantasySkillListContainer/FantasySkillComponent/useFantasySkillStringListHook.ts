import React, { useState } from "react";
export default (): [string[]] => {
    const [FantasySkillStringList, setFantasySkillStringList] = useState<
        string[]
    >([
        "断罪之矢",
        "浮云之相",
        "活力之瓶",
        "万象之姬",
        "冲击之力",
        "寒光之刃",
        "无序之印",
        "跨世之矛",
        "星月之环",
        "凋零之刃",
        "重音之核",
        "欺诈之匣",
        "灾祸之兽",
    ]);
    return [FantasySkillStringList];
};
