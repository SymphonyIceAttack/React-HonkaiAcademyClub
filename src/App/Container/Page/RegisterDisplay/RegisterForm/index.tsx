import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Style from "./UpLoadForm.module.less";
import type { InformationItemType } from "@/Types/InformationTypes";
import { AiOutlineDownload } from "react-icons/ai";
import useReadImageFile from "@/hook/useReadImageFile";
import InputLoad from "./InputLoad";
import InputText from "./InputText";
import SubmitButton from "./SubmitButton";
import RegisterHook from "./RegisterHook";

const index: React.FC<Omit<InformationItemType, "InvolutionCount">> = ({
    avatarImg,
    nickName,
    equipmentImg,
    badgImg,
}) => {
    const navigate = useNavigate();
    const [avatarInputFile, avatarImage, avatarprogress] = useReadImageFile();
    const [equipmentInputFile, equipmentImage, equipmentprogress] =
        useReadImageFile();
    const [badgInputFile, badgImage, badgprogress] = useReadImageFile();
    const [nickNameForm, setnickNameForm] = useState(nickName);
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [requestRegister] = RegisterHook({
        account: account,
        password: password,
        nickname: nickNameForm,
        avatarImage: avatarImage.current?.src as string,
        equipmentImage: equipmentImage.current?.src as string,
        MoeChapterImage: badgImage.current?.src as string,
    });
    return (
        <form className={`${Style.UpLoadForm}`}>
            <InputText
                defautValue={account}
                title={"账号"}
                setValue={(value) => {
                    setAccount(value);
                }}
            />
            <InputText
                defautValue={password}
                title={"密码"}
                setValue={(value) => {
                    setPassword(value);
                }}
            />
            <InputText
                defautValue={nickNameForm}
                title={"昵称"}
                setValue={(value) => {
                    setnickNameForm(value);
                }}
            />
            <InputLoad
                inputFileRef={avatarInputFile}
                imgFileRef={avatarImage}
                progress={avatarprogress}
                imgSrc={avatarImg}
                content="头像图片载入">
                <AiOutlineDownload size={30} color="white" />
            </InputLoad>
            <InputLoad
                inputFileRef={equipmentInputFile}
                imgFileRef={equipmentImage}
                progress={equipmentprogress}
                imgSrc={equipmentImg}
                content="装备图片载入">
                <AiOutlineDownload size={30} color="white" />
            </InputLoad>
            <InputLoad
                inputFileRef={badgInputFile}
                imgFileRef={badgImage}
                progress={badgprogress}
                imgSrc={badgImg}
                content="萌章图片载入">
                <AiOutlineDownload size={30} color="white" />
            </InputLoad>
            <SubmitButton
                ClickEvent={() => {
                    requestRegister()
                        .then((res) => {
                            toast(res.msg);
                            res.status == 200 && navigate("/LoginDisplay");
                        })
                        .catch((err) => {
                            console.log(err);

                        });
                }}
            />
        </form>
    );
};

export default index;
