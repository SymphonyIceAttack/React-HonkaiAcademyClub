export default (LinkLv: string, content: string) => {
    const IndexLv = parseInt(LinkLv) - 1;
    if (IndexLv === -1) return 0;
    const MasterList = [2, 5, 9, 14, 20, 27, 36, 47, 60];
    const ElementList = [1, 3, 6, 10, 15, 23, 35, 54, 80];
    const CritList = [2, 5, 9, 14, 20, 32, 52, 81, 120];
    const SpeedList = [1, 3, 6, 10, 15, 21, 28, 38, 50];
    switch (content) {
        case "全伤":
        case "暴击率":
        case "闪避":
        case "减伤":
            return MasterList[IndexLv];
            break;
        case "暴击伤害":
            return CritList[IndexLv];
            break;
        case "攻速":
        case "移速":
            return SpeedList[IndexLv];
            break;
        case "物理":
        case "能量":
        case "冰":
        case "火":
        case "电":
        case "毒":
            return ElementList[IndexLv];
            break;
        default:
            return 0;
    }
};
