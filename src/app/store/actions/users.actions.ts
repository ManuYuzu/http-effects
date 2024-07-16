import { createAction, props } from "@ngrx/store"
import { User } from "../../models/user.model";

export const loadUsers = createAction(
  '[Users] Load users'
);

export const loadUsersSuccsess = createAction(
  '[Users] Users loaded successfully',
  props<{ users: User[] }>()
);

export const loadUsersError = createAction(
  '[Users] Error loading Users',
  props<{ payload: any }>()
);
