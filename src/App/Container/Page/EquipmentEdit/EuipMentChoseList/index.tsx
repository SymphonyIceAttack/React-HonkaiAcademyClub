import Reacti, { useState } from "react";
import Style from "./EuipMentChoseList.module.less";
import EquipMentChoseHeader from "./EquipMentChoseHeader";
import { IoMdArrowRoundBack } from "react-icons/io";
import type { EquipmentType } from "@/Types/EquipeMentType";
import type { EquipMentOneListType } from "../useEquioMentAllListHook";
import SearchFetch from "./SearchFetch";

interface Props {
    isEquipMentListShow: boolean;
    currentClientId: string;
    closeEvent: () => void;
    EquipCurrentMenttType: EquipmentType | null;
    ChoseFinishEvent: (EquimentMessage: any) => void;
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
    return (
        <div
            className={`${Style.EuipMentChoseList}`}
            style={{ top: isEquipMentListShow ? "0px" : "100%" }}>
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
                            seTSearchEquipMentResult(res.SearchResultList);
                        }
                    );
                }}
            />
            <div>Container</div>
        </div>
    );
};

export default index;
