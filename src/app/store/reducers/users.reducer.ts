import { Action, createReducer, on } from "@ngrx/store";
import { User } from "../../models/user.model";
import { loadUsers, loadUsersError, loadUsersSuccsess } from "../actions";

export interface UsersState {
  users: User[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

const _usersReducer = createReducer( usersInitialState,

  on( loadUsers, (state) => ({ ...state, loading: true })),

  on( loadUsersSuccsess, (state, { users }) => ({
    ...state,
    users: [ ...users ],
    loaded: true,
    loading: false
  }) ),

  on( loadUsersError, (state, { payload }) => ({
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

export function usersReducer( state: UsersState = usersInitialState, action: Action ) {
  return _usersReducer( state, action )
};
