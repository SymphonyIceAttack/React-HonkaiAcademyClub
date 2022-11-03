import React, { useEffect } from "react";
import Style from "./LoginDisplay.module.less";
import LoginForm from "./LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useIsExtendStore, changeIsExtend } from "@/store";
const index = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(changeIsExtend(false));
    }, []);
    return (
        <div className={`${Style.LoginDisplay}`}>
            <LoginForm />
        </div>
    );
};

export default index;
