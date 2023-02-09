import type { EquipmentType } from "@/Types/EquipeMentType";
import useBackUrlHook from "@/hook/useBackUrlHook";
import GetHeaderToken from "@/utils/GetHeaderToken";
import GetLocalAccount from "@/utils/GetLocalAccount";
export default (
    type: EquipmentType,
    inputSearch: string,
    currentClientId: string
) => {
    const [BackUrl] = useBackUrlHook();
    const account = GetLocalAccount();
    const requestEquipMentSearch = async (): Promise<any> => {
        return fetch(
            `${BackUrl}/EquipMentSearch?account=${account}&type=${type}&inputSearch=${inputSearch}&currentClientId=${currentClientId}`,
            {
                method: "Post",
                headers: GetHeaderToken(),
            }
        ).then((res) => res.json());
    };
    return [requestEquipMentSearch];
};
