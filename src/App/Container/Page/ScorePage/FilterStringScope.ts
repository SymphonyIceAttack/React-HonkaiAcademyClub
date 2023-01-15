import type { ScoreItemType } from "./index";
import FilterStringUtil from "@/utils/FilterStringUtil";
export default (
    FilterString: string,
    isNickNameFilter: boolean,
    isAccountFilter: boolean,
    item: ScoreItemType
) => {
    if (FilterString.length === 0) {
        return true;
    }
    if (isNickNameFilter) {
        return FilterStringUtil(FilterString, item.NickName) !== -1;
    }

    if (isAccountFilter) {
        return FilterStringUtil(FilterString, item.Account) !== -1;
    }
};
