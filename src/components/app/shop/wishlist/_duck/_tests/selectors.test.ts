import { Selector } from "redux-testkit";
import { ReducerState } from "../reducer";
import { ApplicationState } from "../../../../../../../src/store";
import { getCurrentSubmittingId } from "../selectors";

describe("components > app > shop > wishlist > selectors", () => {
  const FAKE_SUBMITTING_ID = "fake-id";

  const getStateWith = (stateData: ReducerState): ApplicationState =>
    (({
      shop: {
        wishlist: {
          ...stateData
        }
      }
    } as unknown) as ApplicationState);

  test("getCurrentSubmittingId() should return 'currentSubmittingId' in state", () => {
    Selector(getCurrentSubmittingId)
      .expect(
        getStateWith({
          currentSubmittingId: FAKE_SUBMITTING_ID
        })
      )
      .toReturn(FAKE_SUBMITTING_ID);
  });
});
