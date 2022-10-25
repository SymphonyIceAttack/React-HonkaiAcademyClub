import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducers from "./reducers/isLoadingReducers";
export const store = configureStore({
    reducer: {
        Loading: isLoadingReducers,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;