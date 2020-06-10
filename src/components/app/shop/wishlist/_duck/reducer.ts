import { Action, Reducer } from "redux";
import { SET_SUBMITTING_ID, SetSubmittingIdAction } from "./types";

export interface ReducerState {
  currentSubmittingId: string | null;
}

export const initialState: ReducerState = {
  currentSubmittingId: null
};

const reducer: Reducer<ReducerState> = (
  state: ReducerState | undefined = initialState,
  action: Action
) => {
  switch (action.type) {
    case SET_SUBMITTING_ID: {
      const setSubmittingIdAction = action as SetSubmittingIdAction;
      return { ...state, currentSubmittingId: setSubmittingIdAction.submittingId };
    }
    default:
      return state;
  }
};

export default reducer;
