import { Thunk } from "redux-testkit";
import { mocked } from "ts-jest";
import { findIndex } from "lodash";
import { SET_ITEMS } from "../types";
import { addItem, loadSaved, removeItem, save, setItemsAction, CART_STORAGE_KEY } from "../actions";
import CartItem from "../../../../../../helpers/types/CartItem";
import localStorageHelper from "../../../../../../helpers/localStorage";
import { ApplicationState } from "../../../../../../../src/store";

jest.mock(".../../../../../../helpers/localStorage");
const mockedLocalStorageHelper = mocked(localStorageHelper, true);

describe("components > app > shop > cart > actions", () => {
  beforeEach(() => {});

  afterEach(() => {
    mockedLocalStorageHelper.load.mockReset();
    mockedLocalStorageHelper.remove.mockReset();
    mockedLocalStorageHelper.save.mockReset();
  });

  describe("addItem()", () => {
    test("when no existing item should add to the items list", async () => {
      const dispatches = await Thunk(addItem).withState(FAKE_STATE).execute(FAKE_ADD_ITEM);

      const expected = [ ...FAKE_ITEMS, FAKE_ADD_ITEM ];

      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setItemsAction(expected));
    });

    test("when already exist such item should only increase the amount", async () => {
      const state = {
        ...FAKE_STATE,
        shop: { cart: { items: [ ...FAKE_ITEMS, { ...FAKE_ADD_ITEM, amount: 1 } ] } }
      };
      const dispatches = await Thunk(addItem).withState(state).execute(FAKE_ADD_ITEM);

      const expected = [ ...FAKE_ITEMS, { ...FAKE_ADD_ITEM, amount: 2 } ];

      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setItemsAction(expected));
    });

    test("when already exist ONLY such item should only increase the amount", async () => {
      const state = {
        ...FAKE_STATE,
        shop: { cart: { items: [ { ...FAKE_ADD_ITEM, amount: 1 } ] } }
      };
      const dispatches = await Thunk(addItem).withState(state).execute(FAKE_ADD_ITEM);

      const expected = [ { ...FAKE_ADD_ITEM, amount: 2 } ];

      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setItemsAction(expected));
    });
  });

  describe("removeItem()", () => {
    test("when only existing one item should remove it", async () => {
      const dispatches = await Thunk(removeItem).withState(FAKE_STATE).execute(ID_ONLY_ONE_ITEM);

      const indexToRemove = findIndex(FAKE_ITEMS, it => it.id === ID_ONLY_ONE_ITEM);
      const expected = [
        ...FAKE_ITEMS.slice(0, indexToRemove),
        ...FAKE_ITEMS.slice(indexToRemove + 1, FAKE_ITEMS.length)
      ];

      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setItemsAction(expected));
    });

    test("when exist more than one item should decrease the amount", async () => {
      const dispatches = await Thunk(removeItem).withState(FAKE_STATE).execute(ID_TWO_ITEMS);

      const itemToRemove = FAKE_ITEMS.find(it => it.id === ID_TWO_ITEMS);
      const indexToRemove = findIndex(FAKE_ITEMS, it => it.id === ID_TWO_ITEMS);
      const expected = [
        ...FAKE_ITEMS.slice(0, indexToRemove),
        { ...itemToRemove, amount: itemToRemove.amount - 1 },
        ...FAKE_ITEMS.slice(indexToRemove + 1, FAKE_ITEMS.length)
      ];

      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setItemsAction(expected));
    });

    test("when no exist such item should return same state items", async () => {
      const dispatches = await Thunk(removeItem).withState(FAKE_STATE).execute("non-existing-id");

      expect(dispatches).toHaveLength(1);
      expect(dispatches[0].getAction()).toEqual(setItemsAction(FAKE_ITEMS));
    });
  });

  describe("save()", () => {
    test("should get items from state and save them to local storage", async () => {
      await Thunk(save).withState(FAKE_STATE).execute();

      expect(mockedLocalStorageHelper.save).toHaveBeenCalledWith(CART_STORAGE_KEY, FAKE_ITEMS);
    });
  });

  describe("loadSaved()", () => {
    test("get items saved at storage and save them to the state", async () => {
      const fakeStoredItems = [ ...FAKE_ITEMS, FAKE_ADD_ITEM ];
      mockedLocalStorageHelper.load.mockReturnValueOnce(fakeStoredItems);

      const dispatches = await Thunk(loadSaved).execute();

      expect(mockedLocalStorageHelper.load).toHaveBeenCalledWith(CART_STORAGE_KEY);
      expect(dispatches).toHaveLength(1);
      expect(dispatches[0].getAction()).toEqual(setItemsAction(fakeStoredItems));
    });

    test("get no items saved at storage and return empty array", async () => {
      mockedLocalStorageHelper.load.mockReturnValueOnce(null);

      const dispatches = await Thunk(loadSaved).execute();

      expect(mockedLocalStorageHelper.load).toHaveBeenCalledWith(CART_STORAGE_KEY);
      expect(dispatches).toHaveLength(1);
      expect(dispatches[0].getAction()).toEqual(setItemsAction([]));
    });
  });

  test("setItemsAction() should return action with type SET_ITEMS and items", () => {
    const action = setItemsAction(FAKE_ITEMS);

    expect(action.type).toBe(SET_ITEMS);
    expect(action.items).toBe(FAKE_ITEMS);
  });

  const FAKE_ADD_ITEM: CartItem = {
    id: "id-add",
    imageUrl: "http://add.url.com",
    name: "Name - Add",
    price: 5,
    amount: 1
  };

  const ID_ONLY_ONE_ITEM = "id-only-one";
  const ID_TWO_ITEMS = "id-two";

  const FAKE_ITEMS: CartItem[] = [
    {
      id: "id-1",
      imageUrl: "http://1.url.com",
      name: "Name - 1",
      price: 43,
      amount: 33
    },
    {
      id: ID_TWO_ITEMS,
      imageUrl: "http://2.url.com",
      name: "Name - 2",
      price: 25,
      amount: 2
    },
    {
      id: ID_ONLY_ONE_ITEM,
      imageUrl: "http://3.url.com",
      name: "Name - 3",
      price: 43,
      amount: 1
    }
  ];

  const FAKE_STATE: ApplicationState = ({
    shop: {
      cart: {
        items: FAKE_ITEMS
      }
    }
  } as unknown) as ApplicationState;
});
