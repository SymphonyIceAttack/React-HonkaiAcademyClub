import React from "react";
import { DemonLinkType } from "../useDemonLinkHook";
import Style from "./DemonLinkContainer.module.less";
import DemonLinkHeader from "./DemonLinkHeader";
import DemonLinkListComponent from "./DemonLinkListComponent";
interface Props {
    isMasterShow: boolean;
    isDemonLinkShow: boolean;
    closeEvent: () => void;
    DemonLinkList: DemonLinkType[];
    ClickEvent: (id: string, value: string) => void;
}
const index: React.FC<Props> = ({
    isMasterShow,
    isDemonLinkShow,
    closeEvent,
    DemonLinkList,
    ClickEvent,
}) => {
    return (
        <div
            className={`${Style.DemonLinkContainer}`}
            style={{
                top: isDemonLinkShow ? "0%" : "100%",
            }}>
            <DemonLinkHeader
                closeEvent={closeEvent}
                stuff={isMasterShow ? "-主套" : "-被套"}
            />
            <DemonLinkListComponent
                DemonLinkList={DemonLinkList}
                ClickEvent={ClickEvent}
            />
        </div>
    );
};

export default index;
