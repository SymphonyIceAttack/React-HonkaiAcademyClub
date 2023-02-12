import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BACKURL } from "@/utils/Localkey";
const initialState = {
    backedUrl:
        localStorage.getItem(BACKURL) || import.meta.env.DEV
            ? "http://localhost:3008"
            : "https://www.huancaibingxi.online",
};
export const counterSlice = createSlice({
    name: "isLoadingReducers",
    initialState,
    reducers: {
        saveBackedUrl: (state, action: PayloadAction<string>) => {
            state.backedUrl = action.payload;
        },
    },
});

export const useBackedUrl = () => (state: RootState) =>
    state.validateMessage.backedUrl;

export const { saveBackedUrl } = counterSlice.actions;

export default counterSlice.reducer;
