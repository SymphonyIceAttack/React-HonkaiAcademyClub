import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import WrapperPage from "./WrapperPage";
const TestPage = lazy(() => import("./TestPage"));
const InformationDisplay = lazy(() => import("./InformationDisplay"));
const InformationModification = lazy(() => import("./InformationModification"));
const LoginDisplay = lazy(() => import("./LoginDisplay"));
const RegisterDisplay = lazy(() => import("./RegisterDisplay"));
const MessageBoard = lazy(() => import("./MessageBoard"));
const BackUrlDisplay = lazy(() => import("./BackUrlDisplay"));
const ScorePage = lazy(() => import("./ScorePage"));

export default () => {
    return useRoutes([
        {
            path: "/test1",
            element: <TestPage />,
        },
        {
            path: "/test2",
            element: <TestPage />,
        },
        {
            path: "/InformationDisplay",
            element: (
                <WrapperPage>
                    <InformationDisplay />
                </WrapperPage>
            ),
        },
        {
            path: "/InformationModification",
            element: (
                <WrapperPage>
                    <InformationModification />
                </WrapperPage>
            ),
        },
        {
            path: "/LoginDisplay",
            element: (
                <WrapperPage>
                    <LoginDisplay />
                </WrapperPage>
            ),
        },
        {
            path: "/RegisterDisplay",
            element: (
                <WrapperPage>
                    <RegisterDisplay />
                </WrapperPage>
            ),
        },
        {
            path: "/MessageBoard",
            element: (
                <WrapperPage>
                    <MessageBoard />
                </WrapperPage>
            ),
        },
        {
            path: "/BackUrlDisplay",
            element: (
                <WrapperPage>
                    <BackUrlDisplay />
                </WrapperPage>
            ),
        },
        {
            path: "/ScorePage",
            element: (
                <WrapperPage>
                    <ScorePage />
                </WrapperPage>
            ),
        },
        {
            path: "/",
            element: <Navigate to="/LoginDisplay" />,
        },
    ]);
};
