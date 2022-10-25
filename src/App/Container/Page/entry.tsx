import { lazy } from "react";
import { useRoutes } from "react-router-dom";
const TestPage = lazy(() => import("./TestPage"));
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
    ]);
};
