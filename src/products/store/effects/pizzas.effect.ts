import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';
import { map, switchMap, catchError } from '../../../../node_modules/rxjs/operators';
import { of } from 'rxjs/observable/of';
//import { map } from '../../../../node_modules/@types/bluebird';

@Injectable()
export class PizzasEffects {
    //dependency injections
    constructor(private actions$: Actions, private pizzaService: fromServices.PizzasService) {}
    
    //bring data back to the reducer
    @Effect()
    //pipe contains a stream of pure fns as opposed to chaining fns 
    //w/ the prototype operator
    loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
     .pipe(
         switchMap(() => {
           return this.pizzaService.getPizzas().pipe( //returns an observable of the pizza array, map over 
               map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
               //return an observable of the action
               catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
           )
         })
     );
}