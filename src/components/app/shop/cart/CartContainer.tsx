import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import Cart from "./Cart";
import { ApplicationState } from "../../../../store";
import { SetItemsAction } from "./_duck/types";
import { getItems, getCartTotalPrice } from "./_duck/selectors";
import { increaseCartItemAmount, removeItem } from "./_duck/actions";

function mapStateToProps(state: ApplicationState) {
  return {
    items: getItems(state),
    totalPrice: getCartTotalPrice(state)
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<ApplicationState, unknown, SetItemsAction>) {
  return {
    addItem: (itemId: string) => dispatch(increaseCartItemAmount(itemId)),
    removeItem: (itemId: string) => dispatch(removeItem(itemId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
