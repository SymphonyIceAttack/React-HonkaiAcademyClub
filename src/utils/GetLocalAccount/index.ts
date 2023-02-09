import { USERACCOUNT } from "../Localkey";
export default () => {
    const { account } = (JSON.parse(localStorage.getItem(USERACCOUNT)!) as {
        account: string;
    }) || {
        account: "",
    };
    return account;
};
