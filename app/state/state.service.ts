import { BehaviorSubject } from "rxjs";
import IQueen from "../queens/Iqueen";
import { User } from "./user.service";

export interface AppState {
  userState: UserState;
  favoriteQueens: []
}

export interface UserState {
  loading: boolean;
  loaded: boolean;
  user: User | null;
}

function stateService() {
  const initialState: AppState = {
    userState: {
      loading: false,
      loaded: false,
      user: null
    },
    favoriteQueens: []
  }
  const appState = new BehaviorSubject<AppState>(initialState)

  function addFavoriteQueen(queen: IQueen) {

  }
}