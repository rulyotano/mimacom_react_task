import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import List from "./List";
import { ApplicationState } from "../../../../store";
import { load } from "./_duck/actions";
import { KnownShopListAction } from "./_duck/types";
import { getData, getIsLoading } from "./_duck/selectors";
import { addItem } from "../cart/_duck/actions";
import { SetItemsAction } from "../cart/_duck/types";
import { getCartCount } from "../cart/_duck/selectors";
import { getCurrentSubmittingId } from "../wishlist/_duck/selectors";
import { toggleFavoriteStatus } from "../wishlist/_duck/actions";
import { Product } from "../../../../helpers/types";

function mapStateToProps(state: ApplicationState) {
  return {
    data: getData(state),
    isLoading: getIsLoading(state),
    cartCount: getCartCount(state),
    favoriteSubmitItemId: getCurrentSubmittingId(state)
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<ApplicationState, unknown, KnownShopListAction | SetItemsAction>
) {
  return {
    load: (favorite: boolean = false) => dispatch(load(favorite)),
    addToCart: (item: Product) => {
      dispatch(addItem(item));
    },
    toggleFavorite: (itemId: string) => dispatch(toggleFavoriteStatus(itemId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
