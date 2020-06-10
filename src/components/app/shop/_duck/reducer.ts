import { Action, Reducer, combineReducers } from "redux";
import list, { ReducerState as ListReducerState } from "../list/_duck/reducer";
import cart, { ReducerState as CartReducerState } from "../cart/_duck/reducer";
import wishlist, { ReducerState as WishlistReducerState } from "../wishlist/_duck/reducer";

export interface ReducerState {
  _: ShopReducerState;
  list: ListReducerState;
  cart: CartReducerState;
  wishlist: WishlistReducerState;
}

export interface ShopReducerState {}

export const initialState: ShopReducerState = {};

export const reducer: Reducer<ShopReducerState> = (
  state: ShopReducerState | undefined = initialState,
  { type }: Action
) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  _: reducer,
  list,
  cart,
  wishlist
});
