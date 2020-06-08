import { Product } from "../../../../../helpers/types";

export const SET_IS_LOADING = "SHOP_LIST_SET_IS_LOADING";
export const DATA_LOADED = "SHOP_LIST_DATA_LOADED";

export interface SetIsLoadingAction {
  type: "SHOP_LIST_SET_IS_LOADING";
  isLoading: boolean;
}

export interface DataLoadedAction {
  type: "SHOP_LIST_DATA_LOADED";
  data: Product[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownShopListAction = SetIsLoadingAction | DataLoadedAction;
