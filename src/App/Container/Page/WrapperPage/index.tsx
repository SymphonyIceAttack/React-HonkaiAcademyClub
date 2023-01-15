import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import validateBackedHook from "./validateBackedHook";
import validateUserHook from "./validateUserHook";
import useBackUrlHook from "@/hook/useBackUrlHook";
import { toast } from "react-toastify";
import GetLocalAccount from "@/utils/GetLocalAccount";
interface Props {
    children: React.ReactNode;
}

const WrapperPage: React.FC<Props> = ({ children }) => {
    const [isVlidate, setIsVlidate] = useState(false);
    const [requestValidateBackedUrl] = validateBackedHook();
    const [requestValidateUser] = validateUserHook();
    const [BackUrl] = useBackUrlHook();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const startRequest = async () => {
            if (
                pathname !== "/BackUrlDisplay" &&
                !(await requestValidateBackedUrl(BackUrl)).isvalidateUrl
            ) {
                navigate("/BackUrlDisplay");
                toast("请先指定后端地址", {
                    position: "top-center",
                });
                return;
            }

            const validDataUser = await requestValidateUser();
            const UserAccount = GetLocalAccount();

            if (
                pathname !== "/BackUrlDisplay" &&
                pathname !== "/LoginDisplay" &&
                pathname !== "/RegisterDisplay" &&
                validDataUser.account !== UserAccount
            ) {
                toast("用户未登陆");
                navigate("/LoginDisplay");
                return;
            } else {
                validDataUser.account === UserAccount &&
                    setIsVlidate(true);
            }
        };

        startRequest();

        return () => {};
    }, [pathname]);

    useEffect(() => {
        !import.meta.env.DEV && isVlidate && navigate("/InformationDisplay");
    }, [isVlidate]);
    return <>{children}</>;
};

export default WrapperPage;
