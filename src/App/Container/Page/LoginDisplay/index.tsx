import React, { useEffect } from "react";
import Style from "./LoginDisplay.module.less";
import LoginForm from "./LoginForm";
const index = () => {
    return (
        <div className={`${Style.LoginDisplay}`}>
            <LoginForm />
        </div>
    );
};

export default index;
