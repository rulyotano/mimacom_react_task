// import minesweeperReducer, {
//   ReducerState as MinesweeperState
// } from "../components/app/minesweeper/_duck/reducer";

export interface ApplicationState {
  // minesweeper: MinesweeperState;
}

export const reducers = {
  // minesweeper: minesweeperReducer
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
