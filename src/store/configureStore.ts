import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducers from "./reducers/isLoadingReducers";
import isExtendReducers from "./reducers/isExtendReducers"
export const store = configureStore({
    reducer: {
        Loading: isLoadingReducers,
        Extend: isExtendReducers
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;