import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
const initialState = {
    isLoading: false
};
export const counterSlice = createSlice({
    name: "isLoadingReducers",
    initialState,
    reducers: {
        changeLoading: (state) => {
            state.isLoading = !state.isLoading
        }
    },
});

export const useLoadingStore = () => (state: RootState) => state.Loading.isLoading;

export const { changeLoading } = counterSlice.actions;

export default counterSlice.reducer;
