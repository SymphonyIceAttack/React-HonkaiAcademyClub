import React, { useState } from "react";
import Style from "./UpLoadForm.module.less";
import type { InformationItemType } from "@/Types/InformationTypes";
import { AiOutlineDownload } from "react-icons/ai";
import useReadImageFile from "@/hook/useReadImageFile";
import InputLoad from "./InputLoad";
import InputText from "./InputText";
import SubmitButton from "./SubmitButton";
const index: React.FC<InformationItemType> = ({
    avatarImg,
    nickName,
    equipmentImg,
    badgImg,
    InvolutionCount,
}) => {
    const [avatarInputFile, avatarImage, avatarprogress] = useReadImageFile();
    const [equipmentInputFile, equipmentImage, equipmentprogress] =
        useReadImageFile();
    const [badgInputFile, badgImage, badgprogress] = useReadImageFile();
    const [nickNameForm, setnickNameForm] = useState(nickName);

    return (
        <form className={`${Style.UpLoadForm}`}>
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
                content="头像图片载入"
            >
                <AiOutlineDownload size={30} color="white" />
            </InputLoad>
            <InputLoad
                inputFileRef={equipmentInputFile}
                imgFileRef={equipmentImage}
                progress={equipmentprogress}
                imgSrc={equipmentImg}
                content="装备图片载入"
            >
                <AiOutlineDownload size={30} color="white" />
            </InputLoad>
            <InputLoad
                inputFileRef={badgInputFile}
                imgFileRef={badgImage}
                progress={badgprogress}
                imgSrc={badgImg}
                content="萌章图片载入"
            >
                <AiOutlineDownload size={30} color="white" />
            </InputLoad>
            <SubmitButton />
        </form>
    );
};

export default index;
