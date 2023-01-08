import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducers from "./reducers/isLoadingReducers";
import isExtendReducers from "./reducers/isExtendReducers";
import validateMessageReducers from "./reducers/validateMessageReducers";
export const store = configureStore({
    reducer: {
        Loading: isLoadingReducers,
        Extend: isExtendReducers,
        validateMessage: validateMessageReducers,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
