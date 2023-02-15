import React, { useState } from "react";
import Style from "./DownLoadEquipMentInput.module.less";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { EncryptMessageType } from "../UpLoadEquipMentButton/EncryptFetch";
import { useDecryptFetch } from "./EncryptFetch";
import { toast } from "react-toastify";
interface Props {
    ClickEvent: (EncryptMessage: EncryptMessageType) => void;
}
const index: React.FC<Props> = ({ ClickEvent }) => {
    const [MaskShareValue, setMaskShareValue] = useState("");
    const [requestDecryptEquipMent] = useDecryptFetch(MaskShareValue);

    return (
        <div className={`${Style.DownLoadEquipMentContainer}`}>
            <div className={`${Style.DownLoadEquipMentInput}`}>
                <input
                    type="text"
                    placeholder="载入装备码"
                    value={MaskShareValue}
                    onChange={(ev) => {
                        setMaskShareValue(ev.target.value);
                    }}
                />
            </div>
            <div
                className={`${Style.IconContainer}`}
                onClick={() => {
                    toast.promise(
                        requestDecryptEquipMent().then(
                            (res: {
                                decryptedData: EncryptMessageType | null;
                            }) => {
                                res.decryptedData !== null &&
                                    ClickEvent(res.decryptedData);
                                res.decryptedData !== null
                                    ? toast(
                                          "载入成功 关注B1黑暗星云喵，关注B1黑暗星云谢谢喵(游戏社团号:2008233)"
                                      )
                                    : toast("编码不存在");
                            }
                        ),
                        {
                            pending: "Loading",
                        }
                    );
                }}>
                <BsCloudArrowDownFill size={40} color="rgb(118, 224, 214)" />
            </div>
        </div>
    );
};

export default index;
