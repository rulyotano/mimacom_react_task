import { createSelector } from "reselect";
import _ from "lodash";
import { ApplicationState } from "../../../../../store";

const getState = (state: ApplicationState) => state.shop.cart;

export const getItems = (state: ApplicationState) => getState(state).items;

export const getCartCount = createSelector([ getItems ], items => items.length);

export const getCartTotalPrice = createSelector([ getItems ], items =>
  _(items).map(it => it.price * it.amount).sum()
);
