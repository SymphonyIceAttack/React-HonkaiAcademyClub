import type { EquipMentAllListType } from "../../useEquipMentAllListHook";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
import GetLocalAccount from "@/utils/GetLocalAccount";


export const useDecryptFetch = (MaskShare: string) => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestDecryptEquipMent = async () => {
        return fetch(`${BackUrl}/DecryptEquipMent?account=${account}`, {
            method: "Post",
            headers: GetHeaderToken(),
            body: MaskShare,
        }).then((res) => res.json());
    };
    return [requestDecryptEquipMent];
};
