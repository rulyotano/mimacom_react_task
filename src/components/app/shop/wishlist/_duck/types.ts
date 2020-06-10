export const SET_SUBMITTING_ID = "SHOP_WISHLIST_SET_SUBMITTING_ID";

export interface SetSubmittingIdAction {
  type: "SHOP_WISHLIST_SET_SUBMITTING_ID";
  submittingId: string | null;
}

export type WishlistAction = SetSubmittingIdAction;
