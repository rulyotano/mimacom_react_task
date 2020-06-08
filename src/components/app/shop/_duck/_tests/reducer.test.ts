import { Reducer } from "redux-testkit";
import combinedReducer, { initialState, reducer } from "../reducer";

describe("components > app > shop > reducer", () => {
  const emptyAction = { type: "" };

  test("when no matching, initial event, should return INITIAL state", () => {
    Reducer(reducer).expect(emptyAction).toReturnState(initialState);
  });

  test("when no matching, should return PREVIOUS state", () => {
    const previousState = { anyStateField: true };
    Reducer(reducer).withState(previousState).expect(emptyAction).toReturnState(previousState);
  });

  test("default reducer should be a combine reducer", () => {
    const resultState = combinedReducer(undefined, { type: "any" });

    expect(resultState._).toBeDefined();
    expect(resultState.list).toBeDefined();
  });
});
