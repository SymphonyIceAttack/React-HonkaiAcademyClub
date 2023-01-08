import { useState, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import useLoadingRouteHook from "@/hook/useLoadingRouteHook";
import useIsExtendHook from "@/hook/useIsExtendHook";
import Style from "./App.module.less";
import TitleBar from "./TitleBar";
import Container from "./Container";
import NarBar from "./Container/NavBar";
import Page from "./Container/Page";
import GobalLoading from "./GobalLoading";
function App() {
    const [isExtend, setIsExtend] = useIsExtendHook(600);
    const [isLaoding] = useLoadingRouteHook();

    return (
        <div className={`${Style.App}`}>
            {isLaoding ? <GobalLoading /> : null}
            <TitleBar
                IconClick={() => {
                    setIsExtend(!isExtend);
                }}
            />
            <Container>
                <NarBar isExtend={isExtend} />
                <Suspense fallback={<GobalLoading />}>
                    <Page />
                </Suspense>
            </Container>
            <ToastContainer />
        </div>
    );
}

export default App;
