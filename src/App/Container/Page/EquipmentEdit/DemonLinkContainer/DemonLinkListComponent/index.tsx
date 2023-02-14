import React from "react";
import { DemonLinkType } from "../../useDemonLinkHook";
import Style from "./DemonLinkListComponent.module.less";
import DemonLinkItem from "./DemonLinkItem";
import { nanoid } from "nanoid";
interface Props {
    ClickEvent: (id: string, value: string) => void;
    DemonLinkList: DemonLinkType[];
}
const index: React.FC<Props> = ({ ClickEvent, DemonLinkList }) => {
    return (
        <div className={`${Style.DemonLinkListComponent}`}>
            {DemonLinkList.map((item) => (
                <DemonLinkItem
                    key={nanoid()}
                    {...item}
                    ClickEvent={ClickEvent}
                />
            ))}
        </div>
    );
};

export default index;
