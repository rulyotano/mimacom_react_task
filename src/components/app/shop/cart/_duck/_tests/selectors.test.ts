import { Selector } from "redux-testkit";
import { ReducerState } from "../reducer";
import { ApplicationState } from "../../../../../../../src/store";
import { getItems, getCartCount, getCartTotalPrice } from "../selectors";
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

  test("getCartCount() should return 'items' in state", () => {
    const FAKE_ITEMS = [
      { id: "fake-item-id-1" } as CartItem,
      { id: "fake-item-id-2" } as CartItem
    ];
    Selector(getCartCount)
      .expect(
        getStateWith({
          items: FAKE_ITEMS
        })
      )
      .toReturn(FAKE_ITEMS.length);
  });

  test("getCartTotalPrice()", () => {
    const FAKE_ITEMS = [
      { id: "fake-item-id-1", price: 10, amount: 2 } as CartItem,
      { id: "fake-item-id-2", price: 15, amount: 3 } as CartItem
    ];

    Selector(getCartTotalPrice)
      .expect(
        getStateWith({
          items: FAKE_ITEMS
        })
      )
      .toReturn(10 * 2 + 15 * 3);
  });
});
