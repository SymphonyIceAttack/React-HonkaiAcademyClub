import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
const TestPage = lazy(() => import("./TestPage"));
const InformationDisplay = lazy(() => import("./InformationDisplay"));
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
            path: "/",
            element: <Navigate to="/InformationDisplay" />,
        },
    ]);
};
