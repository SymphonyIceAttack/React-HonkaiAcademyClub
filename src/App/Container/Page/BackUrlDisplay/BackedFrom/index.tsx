import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Style from "./BackedFrom.module.less";
import BackFromTitle from "./BackFromTitle";
import BackInputBox from "./BackInputBox";
import BackButton from "./BackButtonBox";
import validateBackedHook from "../../WrapperPage/validateBackedHook";
import { useDispatch } from "react-redux";
import { AppDispatch, saveBackedUrl } from "@/store";
import { BACKURL } from "@/utils/Localkey";
import useclearStateHook from "@/hook/useclearStateHook";
const index = () => {
    const [BackUrlFrom, setBackUrlFrom] = useState("");
    const [isValidate, setIsValidate] = useState(false);
    const [requestValidateBackedUrl] = validateBackedHook();
    const dispatch = useDispatch<AppDispatch>();
    const [clearState] = useclearStateHook();
    useEffect(() => {
        isValidate && dispatch(saveBackedUrl(BackUrlFrom));
        isValidate && localStorage.setItem(BACKURL, BackUrlFrom);
        isValidate ? toast("设定成功") : toast("设定失败");
    }, [isValidate]);
    return (
        <div className={`${Style.BackedFrom}`}>
            <BackFromTitle />
            <BackInputBox
                value={BackUrlFrom}
                ChangeEvent={(value) => {
                    setBackUrlFrom(value);
                }}
            />
            <BackButton
                resetEvent={() => {
                    clearState();
                    setBackUrlFrom("");
                }}
                setUpEvent={() => {
                    requestValidateBackedUrl(BackUrlFrom).then((res) => {
                        clearState();

                        setIsValidate(res.isvalidateUrl);
                    });
                }}
            />
        </div>
    );
};

export default index;
