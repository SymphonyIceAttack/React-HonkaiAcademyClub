import { store, RootState, AppDispatch } from "./configureStore";

export default store;
export type { RootState, AppDispatch };
export { useLoadingStore, changeLoading } from "./reducers/isLoadingReducers";