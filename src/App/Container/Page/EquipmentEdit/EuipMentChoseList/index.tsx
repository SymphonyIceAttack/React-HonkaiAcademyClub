import Reacti, { useState } from "react";
import Style from "./EuipMentChoseList.module.less";
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
            <div className={`${Style.HeaderList}`}>
                <button
                    className={`${Style.buttonBack}`}
                    onClick={() => {
                        closeEvent();
                    }}>
                    <IoMdArrowRoundBack size={40} />
                </button>
                <input
                    type="text"
                    name=""
                    id=""
                    value={inputSearch}
                    onChange={(ev) => {
                        seTinputSearch(ev.target.value);
                    }}
                    placeholder={`请输入${EquipCurrentMenttType}名称`}
                />

                <button
                    className={`${Style.buttonSearch}`}
                    onClick={() => {
                        requestEquipMentSearch().then(
                            (res: {
                                SearchResultList: EquipMentOneListType[];
                            }) => {
                                seTSearchEquipMentResult(res.SearchResultList);
                            }
                        );
                    }}>
                    搜索
                </button>
            </div>
            
        </div>
    );
};

export default index;
