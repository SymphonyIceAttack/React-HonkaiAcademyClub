import React, { useCallback, useEffect, useState } from "react";
import Style from "./EquipmentEdit.module.less";
import EquipMentEditHeader from "./EquipMentEditHeader";
import SwitchEditContainer from "./SwitchEditContainer";
import EuipMentChoseContainer from "./EuipMentChoseContainer";
import FantasySkillContainer from "./FantasySkillContainer";
import DemonLinkContainer from "./DemonLinkContainer";
import type { EquipmentType } from "@/Types/EquipeMentType";
import useEquipMentAllListHook from "./useEquipMentAllListHook";
import useFantasySkillHook from "./useFantasySkillHook";
import TransformTypeKey from "./TransformTypeKey";
import SwitchButtonBox from "./EquipMentEditHeader/SwitchButtonBox";
import ComputedWeight from "./EquipMentEditHeader/ComputedWeight";
import UpLoadEquipMentButton from "./EquipMentEditHeader/UpLoadEquipMentButton";
import DownLoadEquipMentInput from "./EquipMentEditHeader/DownLoadEquipMentInput";
import EquipMentHeaderButton from "./EquipMentEditHeader/EquipMentHeaderButton";
import useDemonLinkHook from "./useDemonLinkHook";
const index = () => {
    const [isMasterShow, setIsMasterShow] = useState(true);
    const [isSpareShow, setIsSpareShow] = useState(false);

    const [MasterEquipMentAllList, setMasterEquipMentAllList] =
        useEquipMentAllListHook("MasterEquipMent");
    const [SpareEquipMentAllList, setSpareEquipMentAllList] =
        useEquipMentAllListHook("SpareEquipMent");
    const [MasterFantasySkillList, setMasterFantasySkillList] =
        useFantasySkillHook("MasterFantasySkill");
    const [SpareFantasySkillList, setSpareFantasySkillList] =
        useFantasySkillHook("SpareFantasySkill");
    const [MasterDemonLinkList, setMasterDemonLinkList] =
        useDemonLinkHook("MasterDemonLink");
    const [SpareDemonLinkList, setSpareDemonLinkList] =
        useDemonLinkHook("SpareDemonLink");
    const [isEquipMentListShow, setisEquipMentListShow] = useState(false);
    const [isFantasySkillShow, setIsFantasySkillShow] = useState(false);
    const [isDemonLinkShow, setIsDemonLinkShow] = useState(false);

    const [EquipCurrentMenttType, setEquipCurrentMenttType] =
        useState<EquipmentType | null>(null);
    const [currentClientId, setcurrentClientId] = useState("");
    const EquiMetItemClick = (type: EquipmentType, clientId: string) => {
        setisEquipMentListShow((isShow) => true);
        setEquipCurrentMenttType(type);
        setcurrentClientId(clientId);
    };

    return (
        <div className={`${Style.EquipmentEdit}`}>
            <EquipMentEditHeader>
                <SwitchButtonBox
                    isMasterShow={isMasterShow}
                    isSpareShow={isSpareShow}
                    changeMasterShow={(isShow) => {
                        setIsMasterShow(isShow);
                    }}
                    changeSpareShow={(isShow) => {
                        setIsSpareShow(isShow);
                    }}
                />
                <EquipMentHeaderButton
                    content="空想技能"
                    ClickEvent={() => {
                        setIsFantasySkillShow(true);
                    }}
                />
                <EquipMentHeaderButton
                    content="使魔Link"
                    ClickEvent={() => {
                        setIsDemonLinkShow(true);
                    }}
                />
                <ComputedWeight
                    EquipMentAllList={
                        isMasterShow
                            ? MasterEquipMentAllList
                            : SpareEquipMentAllList
                    }
                />
                <DownLoadEquipMentInput
                    ClickEvent={(decryptedData) => {
                        setMasterEquipMentAllList(
                            decryptedData.MasterEquipMentAllList
                        );
                        setSpareEquipMentAllList(
                            decryptedData.SpareEquipMentAllList
                        );
                        setMasterFantasySkillList(
                            decryptedData.MasterFantasySkillList
                        );
                        setSpareFantasySkillList(
                            decryptedData.SpareFantasySkillList
                        );
                        setMasterDemonLinkList(
                            decryptedData.MasterDemonLinkList
                        );
                        setSpareDemonLinkList(decryptedData.SpareDemonLinkList);
                    }}
                />
                <UpLoadEquipMentButton
                    EncryptMessage={{
                        MasterEquipMentAllList: MasterEquipMentAllList,
                        SpareEquipMentAllList: SpareEquipMentAllList,
                        MasterFantasySkillList: MasterFantasySkillList,
                        SpareFantasySkillList: SpareFantasySkillList,
                        MasterDemonLinkList: MasterDemonLinkList,
                        SpareDemonLinkList: SpareDemonLinkList,
                    }}
                />
            </EquipMentEditHeader>
            <SwitchEditContainer
                MasterEquipMentAllList={MasterEquipMentAllList}
                isMasterShow={isMasterShow}
                SpareEquipMentAllList={SpareEquipMentAllList}
                isSpareShow={isSpareShow}
                ClickEvent={EquiMetItemClick}
            />
            <DemonLinkContainer
                isMasterShow={isMasterShow}
                isDemonLinkShow={isDemonLinkShow}
                closeEvent={() => {
                    setIsDemonLinkShow(false);
                }}
                DemonLinkList={
                    isMasterShow ? MasterDemonLinkList : SpareDemonLinkList
                }
                ClickEvent={(id, LinkLv) => {
                    const NewDemonLinkList = (
                        isMasterShow ? MasterDemonLinkList : SpareDemonLinkList
                    ).map((item) => {
                        if (item.id === id) {
                            item.LinkLv = LinkLv;
                            return item;
                        } else {
                            return item;
                        }
                    });
                    isMasterShow
                        ? setMasterDemonLinkList(NewDemonLinkList)
                        : setSpareDemonLinkList(NewDemonLinkList);
                }}
            />
            <FantasySkillContainer
                isMasterShow={isMasterShow}
                FantasySkillList={
                    isMasterShow
                        ? MasterFantasySkillList
                        : SpareFantasySkillList
                }
                isFantasySkillShow={isFantasySkillShow}
                closeEvent={() => {
                    setIsFantasySkillShow(false);
                }}
                ClickEvent={(id, ImgSrc) => {
                    const NewFantasySkillList = (
                        isMasterShow
                            ? MasterFantasySkillList
                            : SpareFantasySkillList
                    ).map((item) => {
                        if (item.id == id) {
                            item.value = ImgSrc;
                            return item;
                        } else {
                            return item;
                        }
                    });
                    isMasterShow
                        ? setMasterFantasySkillList(NewFantasySkillList)
                        : setSpareFantasySkillList(NewFantasySkillList);
                }}
            />

            <EuipMentChoseContainer
                currentClientId={currentClientId}
                EquipCurrentMenttType={EquipCurrentMenttType}
                isEquipMentListShow={isEquipMentListShow}
                closeEvent={() => {
                    setisEquipMentListShow(false);
                }}
                ChoseFinishEvent={(EquimentMessage) => {
                    const typeKey = TransformTypeKey(EquipCurrentMenttType!);
                    const EquipMentOneList = structuredClone(
                        isMasterShow
                            ? MasterEquipMentAllList[typeKey]
                            : SpareEquipMentAllList[typeKey]
                    );
                    EquipMentOneList.forEach((item) => {
                        //EquimentMessage
                        if (item.clientId == currentClientId) {
                            //这里因为JS中的对象数组保存的是对象的内存地址，所以通过对象字面量的形式
                            //直接赋值覆盖，并不会影响被保存对象的键值对
                            // item = { ...EquimentMessage };
                            item.equipMentUid = EquimentMessage.equipMentUid;
                            item.ImgSrc = EquimentMessage.ImgSrc;
                            item.title = EquimentMessage.title;
                            item.type = EquimentMessage.type;
                            item.clientId = EquimentMessage.clientId;
                            item.cost = EquimentMessage.cost;
                        }
                    });

                    isMasterShow
                        ? (MasterEquipMentAllList[typeKey] = [
                              ...EquipMentOneList,
                          ])
                        : (SpareEquipMentAllList[typeKey] = [
                              ...EquipMentOneList,
                          ]);
                    isMasterShow &&
                        setMasterEquipMentAllList(
                            structuredClone(MasterEquipMentAllList)
                        );
                    isSpareShow &&
                        setSpareEquipMentAllList(
                            structuredClone(SpareEquipMentAllList)
                        );
                }}
            />
        </div>
    );
};

export default index;
