import { Selector } from "redux-testkit";
import { ReducerState } from "../reducer";
import { ApplicationState } from "../../src/store";
import { sampleSelector } from "../selectors";

describe("components > ... > selectors", () => {
  const getStateWith = (stateData: ReducerState): ApplicationState => ({
    shop: {
      _: {},
      list: {
        ...stateData
      }
    }
  });

  test("sampleSelector() should return 'samplePropInState' in state", () => {
    Selector(sampleSelector)
      .expect(
        getStateWith({
          samplePropInState: true
        })
      )
      .toReturn(true);
  });
});
