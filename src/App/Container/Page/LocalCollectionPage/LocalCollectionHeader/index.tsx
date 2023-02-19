import React, { useState } from "react";
import { toast } from "react-toastify";
import Style from "./LocalCollectionHeader.module.less";
import useGroupListDownLoadMaskShareHook from "./useGroupListDownLoadMaskShareHook";
import type { LocalCollectionGroupType } from "../useLocalCollectionGroupHook";
interface Props {
    CreateEvent: () => void;
    DownLoadEvent: (LocalCollectionGroup: LocalCollectionGroupType) => void;
}
const index: React.FC<Props> = ({ CreateEvent, DownLoadEvent }) => {
    const [GruopMaskShare, setGruopMaskShare] = useState("");
    const [requestGroupListDownLoadMaskShare] =
        useGroupListDownLoadMaskShareHook(GruopMaskShare);
    return (
        <div className={`${Style.LocalCollectionHeader}`}>
            <div className={`${Style.BoxButtonHeader}`}>
                <button
                    onClick={() => {
                        CreateEvent();
                    }}>
                    创建合集
                </button>
            </div>
            <div className={`${Style.BoxButtonHeader}`}>
                <button
                    onClick={() => {
                        if (GruopMaskShare.length === 0) {
                            toast("请先输入集合码");
                            return;
                        } else {
                            toast.promise(
                                requestGroupListDownLoadMaskShare().then(
                                    (res: {
                                        MaskShare: LocalCollectionGroupType | null;
                                    }) => {
                                        res.MaskShare !== null
                                            ? DownLoadEvent(res.MaskShare)
                                            : toast("集合码不存在");
                                    }
                                ),
                                {
                                    success: "加载结束",
                                    pending: "Loading",
                                }
                            );
                        }
                    }}>
                    载入合集
                </button>
                <input
                    type="text"
                    placeholder="请输入集合码"
                    value={GruopMaskShare}
                    onChange={(ev) => {
                        setGruopMaskShare(ev.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default index;
