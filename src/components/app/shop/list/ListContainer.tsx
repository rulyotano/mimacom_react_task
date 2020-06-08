import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import List from "./List";
import { ApplicationState } from "../../../../store";
import { load } from "./_duck/actions";
import { KnownShopListAction } from "./_duck/types";
import { getData, getIsLoading } from "./_duck/selectors";

function mapStateToProps(state: ApplicationState) {
  return {
    data: getData(state),
    isLoading: getIsLoading(state)
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<ApplicationState, unknown, KnownShopListAction>
) {
  return {
    load: () => dispatch(load())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
