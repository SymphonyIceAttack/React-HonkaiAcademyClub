import { useState, Suspense } from "react";
import LoadingRouteHook from "@/hook/LoadingRouteHook";
import Style from "./App.module.less";
import TitleBar from "./TitleBar";
import Container from "./Container";
import NarBar from "./Container/NavBar";
import Page from "./Container/Page";
import Loading from "@/component/Loading";
function App() {
    const [isExtend, setIsExtend] = useState(true);
    const [isLaoding] = LoadingRouteHook();

    return (
        <div className={`${Style.App}`}>
            {isLaoding ? <Loading /> : null}
            <TitleBar
                IconClick={() => {
                    setIsExtend((state) => !state);
                }}
            />
            <Container>
                <NarBar isExtend={isExtend} />
                <Suspense fallback={<Loading />}>
                    <Page />
                </Suspense>
            </Container>
        </div>
    );
}

export default App;
