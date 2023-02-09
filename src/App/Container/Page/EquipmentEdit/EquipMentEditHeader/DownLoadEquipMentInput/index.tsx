import React, { useState } from "react";
import Style from "./DownLoadEquipMentInput.module.less";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { useDecryptFetch, EncryptMessageType } from "./EncryptFetch";
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
                    requestDecryptEquipMent().then(
                        (res: { decryptedData: EncryptMessageType }) => {
                            ClickEvent(res.decryptedData);
                            toast("载入成功");
                        }
                    );
                }}>
                <BsCloudArrowDownFill size={40} color="rgb(118, 224, 214)" />
            </div>
        </div>
    );
};

export default index;
