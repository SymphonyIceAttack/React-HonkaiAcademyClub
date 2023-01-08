import React, { useEffect, useMemo, useState } from "react";
import Style from "./InputLoad.module.less";
import Progress from "@/component/Progress";
import { nanoid } from "nanoid";
interface Props {
    imgSrc: string;
    imgFileRef: React.RefObject<HTMLImageElement>;
    inputFileRef: React.RefObject<HTMLInputElement>;
    progress: number;
    children: React.ReactNode;
    content: string;
}
const index: React.FC<Props> = ({
    imgSrc,
    imgFileRef,
    inputFileRef,
    progress,
    content,
    children,
}) => {
    const inputId = useMemo(() => nanoid(), []);


    return (
        <div className={`${Style.InputLoad}`}>
            {/* imgSrc应该用dom控制添加 */}
            <img  alt="" ref={imgFileRef} />

            <Progress progress={progress} />
            <div className={`${Style.inputfileContainer}`}>
                <input
                    type="file"
                    id={inputId}
                    className={`${Style.inputfile}`}
                    accept="image/*"
                    ref={inputFileRef}
                />
                <label htmlFor={inputId} className={`${Style.LabelBox}`}>
                    <span>{content}</span>
                    {children}
                </label>
            </div>
        </div>
    );
};

export default index;
