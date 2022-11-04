import React from "react";
import Style from "./LoginForm.module.less";
import InputBox from "./InputBox";
import InputTitle from "./InputTitle";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
const index = () => {
    return (
        <form className={`${Style.LoginForm}`}>
            <InputTitle />
            <InputBox label="账号" type="text" />
            <InputBox label="密码" type="password" />
            <div className={`${Style.LoginButtonBox}`}>
                <LoginButton
                    content="登陆"
                    ClickEvent={() => {}}
                    type="submit"
                />
                <LoginButton
                    content="注册"
                    ClickEvent={() => {}}
                    type="button"
                />
            </div>
        </form>
    );
};

export default index;
