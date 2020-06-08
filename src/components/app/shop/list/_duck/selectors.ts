import { ApplicationState } from "../../../../../store";

const getState = (state: ApplicationState) => state.shop.list;

export const getData = (state: ApplicationState) => getState(state).data;
export const getIsLoading = (state: ApplicationState) => getState(state).isLoading;
