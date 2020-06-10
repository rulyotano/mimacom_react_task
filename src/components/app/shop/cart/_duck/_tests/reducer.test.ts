import { Reducer } from "redux-testkit";
import reducer, { initialState } from "../reducer";
import { SET_ITEMS } from "../types";

describe("components > app > shop > cart > reducer", () => {
  const emptyAction = { type: "" };

  test("when no matching, initial event, should return INITIAL state", () => {
    Reducer(reducer).expect(emptyAction).toReturnState(initialState);
  });

  test("when no matching, should return PREVIOUS state", () => {
    const previousState = { anyStateField: true };
    Reducer(reducer).withState(previousState).expect(emptyAction).toReturnState(previousState);
  });

  test("when no SET_ITEMS, should set items in state", () => {
    const previousState = { items: [] };
    const FAKE_ITEMS = [ { id: "fake-item-id" } ];
    const action = { type: SET_ITEMS, items: FAKE_ITEMS };

    Reducer(reducer).withState(previousState).expect(action).toChangeInState({
      items: FAKE_ITEMS
    });
  });
});
