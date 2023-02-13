import React, { useCallback, useEffect, useState } from "react";
import Style from "./EquipmentEdit.module.less";
import EquipMentEditHeader from "./EquipMentEditHeader";
import SwitchEditContainer from "./SwitchEditContainer";
import EuipMentChoseContainer from "./EuipMentChoseContainer";
import FantasySkillContainer from "./FantasySkillContainer";
import type { EquipmentType } from "@/Types/EquipeMentType";
import useEquipMentAllListHook from "./useEquipMentAllListHook";
import useFantasySkillHook from "./useFantasySkillHook";
import TransformTypeKey from "./TransformTypeKey";
import SwitchButtonBox from "./EquipMentEditHeader/SwitchButtonBox";
import ComputedWeight from "./EquipMentEditHeader/ComputedWeight";
import UpLoadEquipMentButton from "./EquipMentEditHeader/UpLoadEquipMentButton";
import DownLoadEquipMentInput from "./EquipMentEditHeader/DownLoadEquipMentInput";
import FantasySkillsButton from "./EquipMentEditHeader/FantasySkillsButton";
const index = () => {
    const [isMasterShow, setIsMasterShow] = useState(true);
    const [isSpareShow, setIsSpareShow] = useState(false);

    const [MasterEquipMentAllList, setMasterEquipMentAllList] =
        useEquipMentAllListHook("MasterEquipMent");
    const [SpareEquipMentAllList, setSpareEquipMentAllList] =
        useEquipMentAllListHook("SpareEquipMent");
    const [FantasySkillList, setFantasySkillList] =
        useFantasySkillHook("FantasySkill");
    const [isEquipMentListShow, setisEquipMentListShow] = useState(false);
    const [isFantasySkillShow, setIsFantasySkillShow] = useState(false);

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
                <FantasySkillsButton
                    ClickEvent={() => {
                        setIsFantasySkillShow(true);
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
                        setFantasySkillList(decryptedData.FantasySkillList)
                    }}
                />
                <UpLoadEquipMentButton
                    EncryptMessage={{
                        MasterEquipMentAllList: MasterEquipMentAllList,
                        SpareEquipMentAllList: SpareEquipMentAllList,
                        FantasySkillList: FantasySkillList,
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

            <FantasySkillContainer
                FantasySkillList={FantasySkillList}
                isFantasySkillShow={isFantasySkillShow}
                closeEvent={() => {
                    setIsFantasySkillShow(false);
                }}
                ClickEvent={(id, content) => {
                    const NewFantasySkillList = FantasySkillList.map((item) => {
                        if (item.id == id) {
                            item.value = content;
                            return item;
                        } else {
                            return item;
                        }
                    });
                    setFantasySkillList(NewFantasySkillList);
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
