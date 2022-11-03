
import React, { useState, Suspense, useEffect, SetStateAction, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useIsExtendStore, changeIsExtend } from "@/store";
import type { PathForExtendType } from '@/Types/PathForextendType'
export default (size: number): [boolean, (isExtend: boolean) => void] => {
    const PathForExtendArr: PathForExtendType[] = ["LoginDisplay"]
    const [windowWith, setWindowWith] = useState(window.innerWidth);
    const isExtend = useSelector(useIsExtendStore())
    const dispatch = useDispatch<AppDispatch>()
    const changeIsExtendDispatch = (isExtend: boolean) => {
        dispatch(changeIsExtend(isExtend))
    }
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
        changeIsExtendDispatch(windowWith >= size);
        return () => { };
    }, [windowWith]);
    useEffect(() => {
        PathForExtendArr.forEach((item) => {
            item == pathname ? changeIsExtendDispatch(false) : null
        })
        windowWith <= size && changeIsExtendDispatch(false)
    }, [pathname])


    return [isExtend, changeIsExtendDispatch]
}