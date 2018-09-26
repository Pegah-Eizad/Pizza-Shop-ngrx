//effects are inhectibles
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
//needed operators
import {of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as toppingsActions from '../actions/toppings.actions';
import * as fromServices from '../../services/toppings.service';

//marker that lets inject things via the constructor
//$ marks an observable
@Injectable()
export class ToppingsEffects {
   constructor(private actions$: Actions, 
    private toppingsService: fromServices.ToppingsService) {}

    @Effect()
    loadToppings$ = this.actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
        switchMap(() => {
            return this.toppingsService.getToppings().pipe(
                map(toppings =>  new toppingsActions.LoadToppingsSuccess(toppings)),
                catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
            );
        })
    );
}