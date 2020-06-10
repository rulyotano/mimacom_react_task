import { Selector } from "redux-testkit";
import { ReducerState } from "../reducer";
import { ApplicationState } from "../../../../../../../src/store";
import { getData, getIsLoading } from "../selectors";

describe("components > app > shop > list > selectors", () => {
  const getStateWith = (stateData: ReducerState): ApplicationState =>
    (({
      shop: {
        list: {
          ...stateData
        }
      }
    } as unknown) as ApplicationState);

  test("getData() should return 'data' in state", () => {
    const FAKE_DATA = "fake-data";

    Selector(getData)
      .expect(getStateWith(({ data: FAKE_DATA } as unknown) as ReducerState))
      .toReturn(FAKE_DATA);
  });

  test("getIsLoading() should return 'isLoading' in state", () => {
    const FAKE_IS_LOADING = "fake-is-loading";

    Selector(getIsLoading)
      .expect(getStateWith(({ isLoading: FAKE_IS_LOADING } as unknown) as ReducerState))
      .toReturn(FAKE_IS_LOADING);
  });
});
