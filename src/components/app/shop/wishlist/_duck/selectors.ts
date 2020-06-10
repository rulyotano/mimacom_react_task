import { ApplicationState } from "../../../../../../src/store";

const getState = (state: ApplicationState) => state.shop.wishlist;

export const getCurrentSubmittingId = (state: ApplicationState) =>
  getState(state).currentSubmittingId;
