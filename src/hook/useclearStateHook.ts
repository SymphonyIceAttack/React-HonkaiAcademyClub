import { useDispatch } from "react-redux";
import { AppDispatch, saveBackedUrl } from "@/store";
import { BACKURL, USERACCOUNT } from "@/utils/Localkey";
export default (): [() => void] => {
    const dispatch = useDispatch<AppDispatch>();

    const clearState = () => {
        dispatch(saveBackedUrl(""));
        localStorage.setItem(BACKURL, "");
        localStorage.setItem(USERACCOUNT, JSON.stringify({ account: "" }));
    };

    return [clearState];
};
