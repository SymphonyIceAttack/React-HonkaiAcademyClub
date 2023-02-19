import React, { useEffect, useRef, useState } from "react";
import ClipboardJS from "clipboard";
import { toast } from "react-toastify";

export default (MaskShare: string): [React.RefObject<HTMLButtonElement>] => {
    const ButtonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const clipboard = new ClipboardJS(ButtonRef.current!, {
            text: function (trigger) {
                if (MaskShare.length === 0) {
                    toast("当前无内容");
                    return MaskShare;
                }
                toast("已经复制到粘贴板");
                return MaskShare;
            },
        });
        return () => {
            clipboard.destroy();
        };
    }, [MaskShare]);
    return [ButtonRef];
};
