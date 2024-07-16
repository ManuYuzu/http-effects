import { createAction, props } from "@ngrx/store"
import { User } from "../../models/user.model";

export const loadUser = createAction(
  '[User] Load user',
  props<{ id: string }>()
);

export const loadUserSuccsess = createAction(
  '[User] User loaded successfully',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[User] Error loading User',
  props<{ payload: any }>()
);
