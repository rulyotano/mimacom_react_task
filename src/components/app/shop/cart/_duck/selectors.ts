import { createSelector } from "reselect";
import { ApplicationState } from "../../../../../store";

const getState = (state: ApplicationState) => state.shop.cart;

export const getItems = (state: ApplicationState) => getState(state).items;

export const getCartCount = createSelector([ getItems ], items => items.length);
