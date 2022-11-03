import React from "react";
import Style from "./LoginForm.module.less";
import InputBox from "./InputBox";
import InputTitle from "./InputTitle";
import { useSelector } from "react-redux";

const index = () => {
    return (
        <form className={`${Style.LoginForm}`}>
            <InputTitle />
            <InputBox label="账号" type="text" />
            <InputBox label="密码" type="password" />
        </form>
    );
};

export default index;
