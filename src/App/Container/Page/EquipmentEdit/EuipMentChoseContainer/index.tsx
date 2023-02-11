import Reacti, { useEffect, useState } from "react";
import Style from "./EuipMentChoseContainer.module.less";
import EquipMentChoseHeader from "./EquipMentChoseHeader";
import EquipMentChoseList from "./EquipMentChoseList";
import type { EquipmentType } from "@/Types/EquipeMentType";
import { toast } from "react-toastify";
import type { EquipMentOneListType } from "../useEquipMentAllListHook";
import SearchFetch from "./SearchFetch";
import { nanoid } from "nanoid";
import FilterString from "@/utils/FilterStringUtil";

interface Props {
    isEquipMentListShow: boolean;
    currentClientId: string;
    closeEvent: () => void;
    EquipCurrentMenttType: EquipmentType | null;
    ChoseFinishEvent: (EquimentMessage: EquipMentOneListType) => void;
}

const index: React.FC<Props> = ({
    isEquipMentListShow,
    currentClientId,
    closeEvent,
    EquipCurrentMenttType,
    ChoseFinishEvent,
}) => {
    const [inputSearch, seTinputSearch] = useState("");
    const [SearchEquipMentResult, seTSearchEquipMentResult] = useState<
        EquipMentOneListType[]
    >([]);
    const [requestEquipMentSearch] = SearchFetch(
        EquipCurrentMenttType!,
        inputSearch,
        currentClientId
    );
    useEffect(() => {
        isEquipMentListShow &&
            requestEquipMentSearch().then(
                (res: { SearchResultList: EquipMentOneListType[] }) => {
                    toast(`搜索到${res.SearchResultList.length}条结果`);
                    seTSearchEquipMentResult(res.SearchResultList);
                }
            );

    }, [isEquipMentListShow]);
    return (
        <div
            className={`${Style.EuipMentChoseContainer}`}
            style={{
                top: isEquipMentListShow ? "0px" : "100%",
            }}>
            <EquipMentChoseHeader
                closeEvent={() => {
                    closeEvent();
                    seTinputSearch("");
                    seTSearchEquipMentResult([]);
                }}
                inputSearch={inputSearch}
                changeInputSearch={(value) => {
                    seTinputSearch(value);
                }}
                EquipCurrentMenttType={EquipCurrentMenttType}
                SearchEvent={() => {
                    requestEquipMentSearch().then(
                        (res: { SearchResultList: EquipMentOneListType[] }) => {
                            toast(`搜索到${res.SearchResultList.length}条结果`);
                            seTSearchEquipMentResult(res.SearchResultList);
                        }
                    );
                }}
            />

            <EquipMentChoseList
                isLoadingShow={isEquipMentListShow}
                SearchEquipMentResult={SearchEquipMentResult.filter(
                    (item) => FilterString(inputSearch, item.title) !== -1
                )}
                ChoseFinishEvent={(Message) => {
                    closeEvent();
                    seTinputSearch("");
                    seTSearchEquipMentResult([]);
                    ChoseFinishEvent(Message);
                }}
            />
        </div>
    );
};

export default index;
