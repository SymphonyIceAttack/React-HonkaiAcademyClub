import React, { useState, useEffect, useRef, useCallback } from "react";
import BoxStyle from "./Box.module.less";

const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isShow, setIsShow] = useState(true);
    const BoxRef = useRef<HTMLDivElement>(null);
    let timer: any = null;
    const ScrollWatch = useCallback(() => {
        if (timer) return;
        timer = setTimeout(() => {
            const BoxTop = BoxRef.current?.getBoundingClientRect().top;
            if (BoxTop! < window.innerHeight * 0.85) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
            timer = null;
        }, 100);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", ScrollWatch);
        window.addEventListener("touchmove", ScrollWatch);
        window.addEventListener("touchcancel", ScrollWatch);

        return () => {
            window.removeEventListener("scroll", ScrollWatch);
            window.removeEventListener("touchmove", ScrollWatch);
            window.addEventListener("touchcancel", ScrollWatch);
        };
    }, []);

    useEffect(() => {
        if (isShow) BoxRef.current?.classList.add(BoxStyle.showCenter);
        else BoxRef.current?.classList.remove(BoxStyle.showCenter);
        return () => {};
    }, [isShow]);

    return (
        <div ref={BoxRef} className={BoxStyle.Box}>
            {children}
        </div>
    );
};

export default Box;
