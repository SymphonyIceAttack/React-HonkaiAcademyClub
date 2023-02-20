import React, { useEffect, useRef, useState } from "react";
import Style from "./LocalCollectionGroupListHeader.module.less";
import type { LocalCollectionGroupType } from "../../../useLocalCollectionGroupHook";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { toast } from "react-toastify";
import useGroupListMaskShareHook from "./useGroupListMaskShareHook";
import useClipBoard from "../useClipBoard";
interface Porps {
    LocalCollectionGroupOneList: LocalCollectionGroupType;
    id: string;
    GrouplistName: string;
    MaskShareLength: number;
    CreateMaskItemEvent: (GroupId: string, MaskShare: string) => void;
    SaveGroupListName: (GroupId: string, GroupListName: string) => void;
    DeleteGroupListEvent: (GroupId: string) => void;
}

const index: React.FC<Porps> = ({
    LocalCollectionGroupOneList,
    GrouplistName,
    MaskShareLength,
    id,
    CreateMaskItemEvent,
    SaveGroupListName,
    DeleteGroupListEvent,
}) => {
    const [requestGroupListMaskShare] = useGroupListMaskShareHook(
        LocalCollectionGroupOneList
    );
    const [GroupListMaskShare, setGroupListMaskShare] = useState("");
    const [ButtonRef] = useClipBoard(GroupListMaskShare);

    const NameInputRef = useRef<HTMLInputElement>(null);
    const [GrouplistNameInput, setGrouplistNameInput] = useState(GrouplistName);
    const [CreateMaskShareValue, setCreateMaskShareValue] = useState("");

    const [isGroupListNameChange, setIsGroupListNameChange] = useState(
        MaskShareLength === 0 ? false : true
    );
    useEffect(() => {
        MaskShareLength === 0 && NameInputRef?.current?.focus();
    }, []);
    return (
        <div className={`${Style.LocalCollectionGroupListHeader}`}>
            <div className={`${Style.GroupListNameContainer}`}>
                <input
                    ref={NameInputRef}
                    type="text"
                    placeholder={GrouplistNameInput}
                    value={GrouplistNameInput}
                    onChange={(ev) => {
                        setGrouplistNameInput(ev.target.value);
                    }}
                    disabled={isGroupListNameChange}
                />
                <button
                    onClick={() => {
                        isGroupListNameChange
                            ? setIsGroupListNameChange(false)
                            : setIsGroupListNameChange(true);
                        !isGroupListNameChange &&
                            SaveGroupListName(id, GrouplistNameInput);
                    }}>
                    {!isGroupListNameChange ? (
                        <AiFillSave size={30} color="white" />
                    ) : (
                        <AiFillEdit size={30} color="white" />
                    )}
                </button>
            </div>

            <div className={`${Style.GroupListCreateButtonBox}`}>
                <input
                    type="text"
                    placeholder="请输入套装码"
                    value={CreateMaskShareValue}
                    onChange={(ev) => {
                        setCreateMaskShareValue(ev.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        CreateMaskShareValue === ""
                            ? toast("装备码不能为空")
                            : GrouplistName !== ""
                            ? CreateMaskItemEvent(id, CreateMaskShareValue)
                            : toast("请先定义并保存合集名称");
                        CreateMaskShareValue.length !== 0 &&
                            GrouplistName !== "" &&
                            setCreateMaskShareValue("");
                    }}>
                    <span>创建编辑</span>
                    <IoIosCreate size={30} color="white" />
                </button>
            </div>
            <div className={`${Style.GroupListCreateButtonShareBox}`}>
                <button
                    className={`${Style.GroupListCreateButtonBoxForUpLoad}`}
                    onClick={() => {
                        toast.promise(
                            requestGroupListMaskShare().then(
                                (res: {
                                    status: number;
                                    MaskShare: string;
                                }) => {
                                    setGroupListMaskShare(res.MaskShare);
                                    toast("请点击分享按钮复制到粘贴板");
                                }
                            ),
                            {
                                pending: "Loading",
                                success: "上传成功",
                            }
                        );
                    }}>
                    生成合集码
                </button>
                <button
                    className={`${Style.GroupListCreateButtonBoxForCopy}`}
                    ref={ButtonRef}>
                    <FiShare size={30} color="white" />
                </button>
                <button
                    className={`${Style.GroupListCreateButtonBoxForCopy}`}
                    onClick={() => {
                        DeleteGroupListEvent(id);
                    }}>
                    <RiDeleteBinFill size={30} color="white" />
                </button>
            </div>
        </div>
    );
};

export default index;
