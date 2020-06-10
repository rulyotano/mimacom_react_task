import { SET_ITEMS, SetItemsAction, CartAction } from "./types";
import { getItems } from "./selectors";
import { CartItem } from "../../../../../helpers/types";
import { AppThunkAction } from "../../../../../../src/store";
import localStorageHelper from "../../../../../helpers/localStorage";

export const CART_STORAGE_KEY = "shop-cart-items";

export const loadSaved = (): AppThunkAction<CartAction> => (dispatch, getState) => {
  const storedItems = localStorageHelper.load<CartItem[]>(CART_STORAGE_KEY);

  dispatch(setItemsAction(storedItems || []));
};

export const save = (): AppThunkAction<CartAction> => (dispatch, getState) => {
  const items = getItems(getState());
  localStorageHelper.save(CART_STORAGE_KEY, items);
};

export const addItem = (
  newItem: CartItem
): AppThunkAction<CartAction | AppThunkAction<CartAction>> => async (dispatch, getState) => {
  const items = getItems(getState());

  const existingItem = items.find(it => it.id === newItem.id);
  let result: CartItem[] = [];

  if (existingItem) {
    const existingIndex = items.indexOf(existingItem);
    result = [
      ...items.slice(0, existingIndex),
      { ...existingItem, amount: existingItem.amount + 1 },
      ...items.slice(existingIndex + 1, items.length)
    ];
  } else {
    result = [ ...items, newItem ];
  }

  dispatch(setItemsAction(result));
  dispatch(save());
};

export const removeItem = (
  itemId: string
): AppThunkAction<CartAction | AppThunkAction<CartAction>> => (dispatch, getState) => {
  const items = getItems(getState());

  const itemToDelete = items.find(it => it.id === itemId);
  let result: CartItem[] = items;

  if (!itemToDelete) {
    dispatch(setItemsAction(result));
    return;
  }

  const existingIndex = items.indexOf(itemToDelete);
  if (itemToDelete.amount <= 1) {
    result = [ ...items.slice(0, existingIndex), ...items.slice(existingIndex + 1, items.length) ];
  } else {
    result = [
      ...items.slice(0, existingIndex),
      {
        ...itemToDelete,
        amount: itemToDelete.amount - 1
      },
      ...items.slice(existingIndex + 1, items.length)
    ];
  }

  dispatch(setItemsAction(result));
  dispatch(save());
};

export const setItemsAction = (items: CartItem[]): SetItemsAction => ({
  type: SET_ITEMS,
  items: items
});
