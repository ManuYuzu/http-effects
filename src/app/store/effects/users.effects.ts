import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserService } from "../../services/user.service";
import * as usersActions from "../actions";

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType( usersActions.loadUsers ),
      mergeMap(
        () => this.userService.getUsers()
          .pipe(
            map( users => usersActions.loadUsersSuccsess({ users }) ),
            catchError( error => of(usersActions.loadUsersError({ payload: error })) )
          )
      )
    )
  );

}
