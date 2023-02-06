import type { EquipmentType } from "@/Types/EquipeMentType";
export default (type: EquipmentType) => {
    switch (type) {
        case "武器":
            return "arms";
            break;
        case "徽章":
            return "badge";
            break;
        case "使魔":
            return "pet";
            break;
        case "服装":
            return "clothing";
            break;
        default:
            const end: never = type;
            return end;
    }
};
