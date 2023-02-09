import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BACKURL } from "@/utils/Localkey";
const initialState = {
    backedUrl: localStorage.getItem(BACKURL) || "www.moyuacademybacked.top",
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
