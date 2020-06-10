import { ApplicationState } from "../../../../../store";

const getState = (state: ApplicationState) => state.shop.cart;

export const getItems = (state: ApplicationState) => getState(state).items;
