import { Action, Reducer } from "redux";
import { SET_ITEMS, SetItemsAction } from "./types";
import { CartItem } from "../../../../../helpers/types";

export interface ReducerState {
  items: CartItem[];
}

export const initialState: ReducerState = {
  items: []
};

const reducer: Reducer<ReducerState> = (
  state: ReducerState | undefined = initialState,
  action: Action
) => {
  switch (action.type) {
    case SET_ITEMS: {
      const setItemAction = action as SetItemsAction;
      return { ...state, items: setItemAction.items };
    }
    default:
      return state;
  }
};

export default reducer;
