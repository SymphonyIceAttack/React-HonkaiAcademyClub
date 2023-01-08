import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Style from "./LoginForm.module.less";
import InputBox from "./InputBox";
import InputTitle from "./InputTitle";
import LoginButton from "./LoginButton";
import LoginHook from "./LoginHook";
import { TOKEN, USERACCOUNT } from "@/utils/Localkey";
const index = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [_, requestMutation] = LoginHook(account, password);
    const navigate = useNavigate();
    return (
        <form className={`${Style.LoginForm}`}>
            <InputTitle />
            <InputBox
                label="账号"
                type="text"
                value={account}
                onChangeEvent={(value) => {
                    setAccount(value);
                }}
            />
            <InputBox
                label="密码"
                type="password"
                value={password}
                onChangeEvent={(value) => {
                    setPassword(value);
                }}
            />
            <div className={`${Style.LoginButtonBox}`}>
                <LoginButton
                    content="登陆"
                    ClickEvent={() => {
                        requestMutation().then((res) => {
                            if (res.status == 200) {
                                toast("登陆成功");
                                localStorage.setItem(TOKEN, res.token);
                                localStorage.setItem(
                                    USERACCOUNT,
                                    JSON.stringify({
                                        account: account,
                                    })
                                );
                                navigate("/InformationDisplay")
                            } else {
                                toast("登陆失败");
                            }
                        });
                    }}
                    type="submit"
                />

                <LoginButton
                    content="注册"
                    ClickEvent={() => {
                        navigate("/RegisterDisplay", {
                            replace: true,
                        });
                    }}
                    type="button"
                />
            </div>
        </form>
    );
};

export default index;
