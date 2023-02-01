import React, { useMemo } from "react";
import { nanoid } from "nanoid";
import Style from "./InputBox.module.less";
interface Props {
    FilterString: string;
    changeFilterString: (FilterString: string) => void;
}
const index: React.FC<Props> = ({ FilterString, changeFilterString }) => {
    const inputId = useMemo(() => nanoid(), []);
    return (
        <form className={`${Style.InputBox}`}>
            <input
                placeholder="筛选条件"
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
