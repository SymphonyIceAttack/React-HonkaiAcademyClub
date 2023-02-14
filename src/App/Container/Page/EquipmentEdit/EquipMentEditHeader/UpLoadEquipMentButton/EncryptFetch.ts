import type { EquipMentAllListType } from "../../useEquipMentAllListHook";
import { FantasySkillType } from "../../useFantasySkillHook";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
import GetLocalAccount from "@/utils/GetLocalAccount";
import stringify from "json-stringify-safe";
import { DemonLinkType } from "../../useDemonLinkHook";
export type EncryptMessageType = {
    MasterEquipMentAllList: EquipMentAllListType;
    SpareEquipMentAllList: EquipMentAllListType;
    MasterFantasySkillList: FantasySkillType[];
    SpareFantasySkillList: FantasySkillType[];
    MasterDemonLinkList: DemonLinkType[];
    SpareDemonLinkList: DemonLinkType[];
};
export const useEncryptFetch = (EncryptMessage: EncryptMessageType) => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestEncryptEquipMent = async () => {
        return fetch(`${BackUrl}/EncryptEquipMent?account=${account}`, {
            method: "Post",
            headers: GetHeaderToken(),
            body: stringify(EncryptMessage),
        }).then((res) => res.json());
    };
    return [requestEncryptEquipMent];
};
