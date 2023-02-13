import React, { useEffect, useRef, useState } from "react";
import Style from "./UpLoadEquipMentButton.module.less";
import { BiUpload } from "react-icons/bi";
import { toast } from "react-toastify";
import { useEncryptFetch, EncryptMessageType } from "./EncryptFetch";
import useClipBoard from "./useClipBoard";
interface Props {
    EncryptMessage: EncryptMessageType;
}
const index: React.FC<Props> = ({ EncryptMessage }) => {
    const [MaskShare, setMaskShare] = useState("");
    const [ButtonRef] = useClipBoard(MaskShare);
    const [requestEncryptEquipMent] = useEncryptFetch(EncryptMessage);

    return (
        <div className={`${Style.UpLoadContainer}`}>
            <div
                className={`${Style.UpLoadEquipMentButton}`}
                onClick={() => {
                    toast.promise(
                        requestEncryptEquipMent().then(
                            (res: { ciphertext: string }) => {
                                setMaskShare(res.ciphertext);
                            }
                        ),
                        {
                            pending: "Loading",
                            success: "分享码已生成点击分享按钮进行拷贝",
                            error: "生成失败请重试",
                        }
                    );
                }}>
                <span>生成分享码</span>
            </div>
            <div className={`${Style.IconContainer}`} ref={ButtonRef}>
                <BiUpload size={40} color="rgb(118, 224, 214)" />
            </div>
        </div>
    );
};

export default index;
