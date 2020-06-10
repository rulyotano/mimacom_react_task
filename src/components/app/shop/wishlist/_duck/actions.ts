import { SET_SUBMITTING_ID, SetSubmittingIdAction, WishlistAction } from "./types";
import { AppThunkAction } from "../../../../../../src/store";
import http from "../../../../../helpers/http";
import { dataLoadedAction } from "../../list/_duck/actions";
import { getData } from "../../list/_duck/selectors";
import { DataLoadedAction } from "../../list/_duck/types";
import { SHOP_URL } from "../../_duck/types";

export const toggleFavoriteStatus = (
  itemId: string
): AppThunkAction<WishlistAction | DataLoadedAction> => async (dispatch, getState) => {
  const data = getData(getState());

  const item = data.find(it => it.id === itemId);

  if (!item) return;

  const newFavoriteValue = item.favorite ? 0 : 1;

  try {
    dispatch(setSubmittingIdAction(itemId));
    await http.patch(`${SHOP_URL}/${itemId}`, { favorite: newFavoriteValue });
    const itemIndex = data.indexOf(item);
    dispatch(
      dataLoadedAction([
        ...data.slice(0, itemIndex),
        { ...item, favorite: newFavoriteValue },
        ...data.slice(itemIndex + 1, data.length)
      ])
    );

    dispatch(setSubmittingIdAction(null));
  } catch (error) {
    dispatch(setSubmittingIdAction(null));
  }
};

export const setSubmittingIdAction = (submittingId: string | null): SetSubmittingIdAction => ({
  type: SET_SUBMITTING_ID,
  submittingId
});
