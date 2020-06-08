import {
  SET_IS_LOADING,
  SetIsLoadingAction,
  KnownShopListAction,
  DataLoadedAction,
  DATA_LOADED
} from "./types";
import { AppThunkAction } from "../../../../../../src/store";
import { Product } from "../../../../../helpers/types";
import http from "../../../../../helpers/http";
import { SHOP_URL } from "../../_duck/types";

export const load = (): AppThunkAction<KnownShopListAction> => async (dispatch, getState) => {
  dispatch(setIsLoadingAction(true));

  try {
    const response = (await http.get(SHOP_URL)) as Product[];
    dispatch(dataLoadedAction(response));
  } catch (error) {
    dispatch(setIsLoadingAction(false));
  }
};

export const setIsLoadingAction = (isLoading: boolean): SetIsLoadingAction => ({
  type: SET_IS_LOADING,
  isLoading
});

export const dataLoadedAction = (data: Product[]): DataLoadedAction => ({
  type: DATA_LOADED,
  data
});
