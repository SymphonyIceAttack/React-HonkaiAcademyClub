import React, { useEffect, useRef, useState } from "react";
import Style from "./LocalCollectionGroupItem.module.less";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import useClipBoard from "./useClipBoard";
interface Props {
    GrouId: string;
    id: string;
    MaskShare: string;
    Name: string;
    SaveGroupItemName: (
        GroupId: string,
        ItemId: string,
        ItemName: string
    ) => void;
    DeleteGroupItem: (GroupId: string, ItemId: string) => void;
}
const index: React.FC<Props> = ({
    GrouId,
    id,
    MaskShare,
    Name,
    SaveGroupItemName,
    DeleteGroupItem,
}) => {
    const NameInputRef = useRef<HTMLInputElement>(null);
    const [ButtonRef] = useClipBoard(MaskShare);
    const [isEditInput, setIsEditInput] = useState(Name !== "" ? true : false);
    const [GroupItemName, setGroupItemName] = useState(Name);
    useEffect(() => {
        Name === "" && NameInputRef.current?.focus();
    }, []);
    return (
        <div className={`${Style.LocalCollectionGroupItem}`}>
            <div
                className={`${Style.LocalCollectionGroupItemMaskShareContainer}`}>
                <span>{MaskShare}</span>
                <button ref={ButtonRef}>
                    <FiCopy color="white" size={25} />
                </button>
            </div>

            <div className={`${Style.LocalCollectionGroupItemEditContainer}`}>
                <input
                    ref={NameInputRef}
                    type="text"
                    disabled={isEditInput}
                    value={GroupItemName}
                    onChange={(ev) => {
                        setGroupItemName(ev.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        setIsEditInput((value) => !value);
                        !isEditInput &&
                            SaveGroupItemName(GrouId, id, GroupItemName);
                    }}>
                    {isEditInput ? (
                        <AiFillEdit color="white" size={30} />
                    ) : (
                        <AiFillSave color="white" size={30} />
                    )}
                </button>
            </div>
            <div className={`${Style.LocalCollectionGroupItemDeleteContainer}`}>
                <button>
                    <RiDeleteBinFill
                        color="white"
                        size={30}
                        onClick={() => {
                            DeleteGroupItem(GrouId, id);
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

export default index;
