import { nanoid } from "nanoid";
import React, { useEffect, useMemo, useState } from "react";
import Style from "./DemonLinkItem.module.less";
import transformLeveLtopPrcentage from "./transformLeveLtopPrcentage";
interface Props {
    content: string;
    LinkLv: string;
    id: string;
    ClickEvent: (id: string, value: string) => void;
}

const index: React.FC<Props> = ({ content, LinkLv, id, ClickEvent }) => {
    const inputId = useMemo(() => nanoid(), []);
    const [value, setValue] = useState(LinkLv);
    const [Prcentage, setPrcentage] = useState(
        transformLeveLtopPrcentage(LinkLv, content)
    );

    useEffect(() => {
        if (value === "" || value === LinkLv) return;
        if (parseInt(value) >= 0 || parseInt(value) <= 9) {
            ClickEvent(id, value);
        }
    }, [value]);

    useEffect(() => {
        setPrcentage(transformLeveLtopPrcentage(LinkLv, content));
    }, [LinkLv]);

    return (
        <form className={`${Style.DemonLinkItem}`}>
            <div className={`${Style.inputBox}`}>
                <input
                    type="text"
                    value={value}
                    onChange={(ev) => {
                        if (ev.target.value.length >= 2) return;
                        setValue(ev.target.value);
                    }}
                />
                <span>LV.0~9</span>
            </div>
            <label htmlFor={inputId}>{content}</label>
            <span className={`${Style.PercentText}`}>{Prcentage}%</span>
        </form>
    );
};

export default index;
