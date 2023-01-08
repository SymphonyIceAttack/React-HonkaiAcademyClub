import { store, RootState, AppDispatch } from "./configureStore";

export default store;

export type { RootState, AppDispatch };

export { useLoadingStore, changeLoading } from "./reducers/isLoadingReducers";

export { useIsExtendStore, changeIsExtend } from "./reducers/isExtendReducers";

export {
    useBackedUrl,
    saveBackedUrl,
} from "./reducers/validateMessageReducers";
