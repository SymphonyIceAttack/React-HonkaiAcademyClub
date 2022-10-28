import React, { useRef, useState, useEffect } from "react";
export default (): [React.RefObject<HTMLInputElement>, React.RefObject<HTMLImageElement>, number] => {
    const InputFileRef = useRef<HTMLInputElement>(null)
    const ImageRef = useRef<HTMLImageElement>(null)
    const [progress, setProgress] = useState(0)
    function changepic () {
        setProgress(0)
        const reads = new FileReader();
        const inputElement = InputFileRef.current!
        const imageElemnt = ImageRef.current!
        const f = inputElement.files![0]
        reads.readAsDataURL(f);
        reads.onload = function (e) {
            setProgress(100)
            imageElemnt.src = this.result as string;
        };
        reads.onprogress = function (ev) {
            const total = f.size;
            setProgress(ev.loaded / total * 100)
        }

    }
    useEffect(() => {
        const inputElement = InputFileRef.current!
        inputElement.addEventListener('change', changepic)
        return () => {
            inputElement.removeEventListener('change', changepic)
        }
    }, [])
    return [InputFileRef, ImageRef, progress]


}