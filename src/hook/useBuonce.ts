import { useEffect, useRef } from "react";

export const useBounce = () => {
    const ContentRef = useRef<HTMLDivElement>(null);
    const ClickEvent = (e: MouseEvent) => {
        let obj = ContentRef.current;
        let l = ContentRef.current!.offsetLeft;
        let t = ContentRef.current!.offsetTop;
        while ((obj = obj?.offsetParent as HTMLDivElement)) {
            l += obj.offsetLeft;
            t += obj.offsetTop;
        }
        let x = e.clientX - l;
        let y = e.clientY - t;
        let circle = document.createElement("span");

        circle.style.top = y + "px";
        circle.style.left = x + "px";
        ContentRef.current?.appendChild(circle);
        setTimeout(function () {
            circle.remove();
        }, 1000);
    };
    useEffect(() => {
        ContentRef.current?.addEventListener("click", ClickEvent);
        return () => {
            ContentRef.current?.removeEventListener("click", ClickEvent);
        };
    }, []);

    return [ContentRef];
};
