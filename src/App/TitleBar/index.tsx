import React from "react";
import Style from "./TitleBar.module.less";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useBounce } from "@/hook/useBuonce";
interface Props {
    IconClick: () => void;
}

const index: React.FC<Props> = ({ IconClick }) => {
    const [ButtonListRef] = useBounce();
    return (
        <div className={`${Style.TitleBar}`}>
            <div className={`${Style.IconButtonBox}`}>
                <div
                    className={`${Style.RadiusBox}`}
                    ref={ButtonListRef}
                    onClick={() => {
                        IconClick();
                    }}
                >
                    <AiOutlineUnorderedList size={30} color={"white"} />
                </div>
                <span>摸鱼学园</span>
            </div>
            <span className={`${Style.spanText}`}>摸🐟</span>
        </div>
    );
};

export default index;
