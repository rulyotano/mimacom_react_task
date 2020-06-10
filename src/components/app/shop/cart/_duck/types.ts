import { CartItem } from "../../../../../helpers/types";

export const SET_ITEMS = "SHOP_CART_SET_ITEMS";

export interface SetItemsAction {
  type: "SHOP_CART_SET_ITEMS";
  items: CartItem[];
}

export type CartAction = SetItemsAction;
