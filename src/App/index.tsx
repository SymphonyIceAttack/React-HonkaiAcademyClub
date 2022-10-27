import { useState, Suspense } from "react";
import LoadingRouteHook from "@/hook/LoadingRouteHook";
import IsExtendHook from "@/hook/IsExtendHook";
import Style from "./App.module.less";
import TitleBar from "./TitleBar";
import Container from "./Container";
import NarBar from "./Container/NavBar";
import Page from "./Container/Page";
import GobalLoading from "./GobalLoading";
function App() {
    const [isExtend, setIsExtend]  = IsExtendHook(600);
    const [isLaoding] = LoadingRouteHook();

    return (
        <div className={`${Style.App}`}>
            {isLaoding ? <GobalLoading /> : null}
            <TitleBar
                IconClick={() => {
                    setIsExtend((state) => !state);
                }}
            />
            <Container>
                <NarBar isExtend={isExtend} />
                <Suspense fallback={<GobalLoading />}>
                    <Page />
                </Suspense>
            </Container>
        </div>
    );
}

export default App;
