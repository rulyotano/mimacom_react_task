import { Action, Reducer } from "redux";
import { DATA_LOADED, SET_IS_LOADING, DataLoadedAction, SetIsLoadingAction } from "./types";
import { Product } from "../../../../../helpers/types";

export interface ReducerState {
  isLoading: boolean;
  data: Product[];
}

export const initialState: ReducerState = {
  isLoading: false,
  data: []
};

const reducer: Reducer<ReducerState> = (
  state: ReducerState | undefined = initialState,
  action: Action
) => {
  const { type } = action;
  switch (type) {
    case DATA_LOADED: {
      const loadedAction = action as DataLoadedAction;
      return { ...state, data: loadedAction.data, isLoading: false };
    }
    case SET_IS_LOADING: {
      const setIsLoadingAction = action as SetIsLoadingAction;
      return { ...state, isLoading: setIsLoadingAction.isLoading };
    }
    default:
      return state;
  }
};

export default reducer;
