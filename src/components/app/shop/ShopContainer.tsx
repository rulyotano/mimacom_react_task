import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import Shop from "./Shop";
import { ApplicationState } from "../../../store";
import { loadSaved } from "./cart/_duck/actions";
import { SetItemsAction } from "./cart/_duck/types";

function mapStateToProps(state: ApplicationState) {
  return {};
}

function mapDispatchToProps(dispatch: ThunkDispatch<ApplicationState, unknown, SetItemsAction>) {
  return {
    loadCart: () => dispatch(loadSaved())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
