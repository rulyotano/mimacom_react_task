import shopReducer, {
  ReducerState as ShopReducerState
} from "../components/app/shop/_duck/reducer";

export interface ApplicationState {
  shop: ShopReducerState;
}

export const reducers = {
  shop: shopReducer
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
