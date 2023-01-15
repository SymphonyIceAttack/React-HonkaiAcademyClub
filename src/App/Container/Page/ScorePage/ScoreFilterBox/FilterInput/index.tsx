import React, { useMemo } from "react";
import Style from "./FilterInput.module.less";
import { nanoid } from "nanoid";
interface Props {
    FilterString: string;
    changeFilterString: (FilterString: string) => void;
}
const index: React.FC<Props> = ({ FilterString, changeFilterString }) => {
    const inputId = useMemo(() => nanoid(), []);
    return (
        <form className={`${Style.FilterInput}`}>
            <label htmlFor={inputId}>筛选条件</label>
            <input
                required
                type="text"
                id={inputId}
                value={FilterString}
                onChange={(e) => {
                    changeFilterString(e.target.value);
                }}
            />
        </form>
    );
};

export default index;
