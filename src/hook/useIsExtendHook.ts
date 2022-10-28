
import React, { useState, Suspense, useEffect, SetStateAction, useRef } from "react";
import { useLocation } from 'react-router-dom';
export default (size: number): [boolean, React.Dispatch<SetStateAction<boolean>>] => {
    const [windowWith, setWindowWith] = useState(window.innerWidth);
    const [isExtend, setIsExtend] = useState(true);
    const { pathname } = useLocation();
    const NavBarRef = useRef<HTMLDivElement>(null)

    const resize = (event: UIEvent) => {
        setWindowWith(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])
    useEffect(() => {
        setIsExtend(windowWith >= size);
        return () => { };
    }, [windowWith]);
    useEffect(() => {
        windowWith <= size && setIsExtend(false)
    }, [pathname])


    return [isExtend, setIsExtend]
}