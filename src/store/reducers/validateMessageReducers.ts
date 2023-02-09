import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BACKURL } from "@/utils/Localkey";
const initialState = {
    backedUrl:
        localStorage.getItem(BACKURL) ||
        "https://honkai-academy-club-backed.vercel.app",
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
