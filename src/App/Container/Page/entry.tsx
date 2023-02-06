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
const LeaderboardDisplay = lazy(() => import("./LeaderboardDisplay"));
const ForecastEquipMentDisplay = lazy(
    () => import("./ForecastEquipMentDisplay")
);
const EquipmentEdit = lazy(() => import("./EquipmentEdit"));

export default () => {
    return useRoutes([
        {
            path: "/test1",
            element: (
                <WrapperPage>
                    <TestPage />,
                </WrapperPage>
            ),
        },
        {
            path: "/test2",
            element: (
                <WrapperPage>
                    <TestPage />,
                </WrapperPage>
            ),
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
            path: "/LeaderboardDisplay",
            element: (
                <WrapperPage>
                    <LeaderboardDisplay />
                </WrapperPage>
            ),
        },
        {
            path: "/ForecastEquipMentDisplay",
            element: (
                <WrapperPage>
                    <ForecastEquipMentDisplay />
                </WrapperPage>
            ),
        },
        {
            path: "/EquipmentEdit",
            element: (
                <WrapperPage>
                    <EquipmentEdit />
                </WrapperPage>
            ),
        },
        {
            path: "/",
            element: <Navigate to="/LoginDisplay" />,
        },
    ]);
};
