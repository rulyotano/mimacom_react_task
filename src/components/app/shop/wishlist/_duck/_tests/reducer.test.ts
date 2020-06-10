import { Reducer } from "redux-testkit";
import reducer, { initialState } from "../reducer";
import { SET_SUBMITTING_ID } from "../types";

describe("components > app > shop > wishlist > reducer", () => {
  const emptyAction = { type: "" };
  const FAKE_SUBMITTING_ID = "fake-id";

  test("when no matching, initial event, should return INITIAL state", () => {
    Reducer(reducer).expect(emptyAction).toReturnState(initialState);
  });

  test("when no matching, should return PREVIOUS state", () => {
    const previousState = { anyStateField: true };
    Reducer(reducer).withState(previousState).expect(emptyAction).toReturnState(previousState);
  });

  test("when SET_SUBMITTING_ID, should return set currentSubmittingId in state", () => {
    const previousState = { currentSubmittingId: null };

    const action = { type: SET_SUBMITTING_ID, submittingId: FAKE_SUBMITTING_ID };

    Reducer(reducer)
      .withState(previousState)
      .expect(action)
      .toChangeInState({ currentSubmittingId: FAKE_SUBMITTING_ID });
  });
});
