import { Selector } from "redux-testkit";
import { ReducerState } from "../reducer";
import { ApplicationState } from "../../../../../../../src/store";
import { getItems } from "../selectors";
import CartItem from "../../../../../../helpers/types/CartItem";

describe("components > app > shop > cart > selectors", () => {
  const getStateWith = (stateData: ReducerState): ApplicationState =>
    (({
      shop: {
        cart: {
          ...stateData
        }
      }
    } as unknown) as ApplicationState);

  test("getItems() should return 'items' in state", () => {
    const FAKE_ITEMS = [ { id: "fake-item-id" } as CartItem ];
    Selector(getItems)
      .expect(
        getStateWith({
          items: FAKE_ITEMS
        })
      )
      .toReturn(FAKE_ITEMS);
  });
});
