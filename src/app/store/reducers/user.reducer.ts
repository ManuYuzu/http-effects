import { Action, createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import { loadUser, loadUserError, loadUserSuccsess } from "../actions";

export interface UserState {
  id: string,
  user: User,
  loaded: boolean,
  loading: boolean,
  error: any
}

export const userInitialState: UserState = {
  id: '',
  user: {} as User,
  loaded: false,
  loading: false,
  error: null
};

const _userReducer = createReducer( userInitialState,

  on( loadUser, (state, { id }) => ({
    ...state,
    loading: true,
    id: id
  })),

  on( loadUserSuccsess, (state, { user }) => ({
    ...state,
    user: { ...user },
    loaded: true,
    loading: false
  }) ),

  on( loadUserError, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }) ),
);

export function userReducer( state: UserState = userInitialState, action: Action ) {
  return _userReducer( state, action )
};
