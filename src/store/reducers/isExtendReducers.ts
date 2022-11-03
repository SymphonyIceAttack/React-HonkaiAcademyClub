import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState = {
    isExtend: true
};
export const counterSlice = createSlice({
    name: "isExtendReducers",
    initialState,
    reducers: {
        changeIsExtend: (state, action: PayloadAction<boolean>) => {
            state.isExtend = action.payload
        }
    },
});

export const useIsExtendStore = () => (state: RootState) => state.Extend.isExtend;

export const { changeIsExtend } = counterSlice.actions;

export default counterSlice.reducer;
