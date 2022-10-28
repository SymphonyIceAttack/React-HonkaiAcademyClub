import React from "react";
import Style from "./UpLoadForm.module.less";
import type { InformationItemType } from "@/Types/InformationTypes";
import { AiOutlineDownload } from "react-icons/ai";
import useReadImageFile from "@/hook/useReadImageFile";
import Progress from "@/component/Progress";
const index: React.FC<InformationItemType> = ({
    avatarImg,
    nickName,
    equipmentImg,
    badgImg,
    InvolutionCount,
}) => {
    const [avatarFile, avatarImage, progress] = useReadImageFile();

    return (
        <form className={`${Style.UpLoadForm}`}>
            <div className={`${Style.avatarImageContainer}`}>
                <img src={avatarImg} alt="" ref={avatarImage} />
                <Progress progress={progress} />
                <div className={`${Style.inputfileContainer}`}>
                    <input
                        type="file"
                        id="avatarFile"
                        className={`${Style.inputfile}`}
                        accept="image/*"
                        ref={avatarFile}
                    />
                    <label htmlFor="avatarFile" className={`${Style.LabelBox}`}>
                        <span>头像图片上传</span>
                        <AiOutlineDownload size={30} color="white" />
                    </label>
                </div>
            </div>
        </form>
    );
};

export default index;
