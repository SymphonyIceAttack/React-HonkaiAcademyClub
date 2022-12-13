import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const TestPage = lazy(() => import("./TestPage"));
const InformationDisplay = lazy(() => import("./InformationDisplay"));
const InformationModification = lazy(() => import("./InformationModification"));
const LoginDisplay = lazy(() => import("./LoginDisplay"));
const MessageBoard = lazy(() => import("./MessageBoard"));
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
            element: <InformationDisplay />,
        },
        {
            path: "/InformationModification",
            element: <InformationModification />,
        },
        {
            path: "/LoginDisplay",
            element: <LoginDisplay />,
        },
        {
            path: "/MessageBoard",
            element: <MessageBoard />,
        },
        {
            path: "/",
            element: <Navigate to="/LoginDisplay" />,
        },
    ]);
};
