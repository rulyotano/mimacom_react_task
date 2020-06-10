import { Reducer } from "redux-testkit";
import reducer, { initialState } from "../reducer";
import { DATA_LOADED, SET_IS_LOADING } from "../types";
import { Product } from "../../../../../../helpers/types";

describe("components > app > shop > list > reducer", () => {
  const emptyAction = { type: "" };

  test("when no matching, initial event, should return INITIAL state", () => {
    Reducer(reducer).expect(emptyAction).toReturnState(initialState);
  });

  test("when no matching, should return PREVIOUS state", () => {
    const previousState = { anyStateField: true };
    Reducer(reducer).withState(previousState).expect(emptyAction).toReturnState(previousState);
  });

  test("when no DATA_LOADED, should set data and isLoading to false", () => {
    const previousState = { data: [], isLoading: true };
    const newData = ([ { id: "asdasd" } ] as unknown) as Product[];
    const action = { type: DATA_LOADED, data: newData };

    Reducer(reducer).withState(previousState).expect(action).toChangeInState({
      data: newData,
      isLoading: false
    });
  });

  test("when no SET_IS_LOADING, should set isLoading", () => {
    const previousState = { isLoading: true };
    const action = { type: SET_IS_LOADING, isLoading: false };

    Reducer(reducer).withState(previousState).expect(action).toChangeInState({
      isLoading: false
    });
  });
});
