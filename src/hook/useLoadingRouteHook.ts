import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLoadingStore, changeLoading } from "@/store";
import type { AppDispatch } from "@/store/index"
import { useLocation } from 'react-router-dom';
export default (): [boolean] => {
    const { pathname } = useLocation();
    const isLaoding = useSelector(useLoadingStore());
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        !isLaoding && dispatch(changeLoading())
    }, [pathname])
    
    useEffect(() => {
        isLaoding && setTimeout(() => {
            dispatch(changeLoading())
        }, 2000)
    }, [isLaoding])

    return [isLaoding]
}