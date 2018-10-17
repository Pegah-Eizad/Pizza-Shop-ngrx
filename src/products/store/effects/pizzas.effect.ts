import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';
import { map, switchMap, catchError } from '../../../../node_modules/rxjs/operators';
import { of } from 'rxjs/observable/of';
import { effects } from '.';
import { createPipe } from '@angular/compiler/src/core';
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
           );
         })
     );

     @Effect()
     createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA)
     .pipe(
         map((action: pizzaActions.CreatePizza) => action.payload), 
         //return payload to the next item in the stream
         switchMap(pizza => {
             return this.pizzaService.createPizza(pizza)
             .pipe(
                 map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
                 catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
             );
         })
     );

     @Effect()
     updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA)
     .pipe(
         map((action: pizzaActions.UpdatePizza) => action.payload),
         switchMap(pizza => {
             return this.pizzaService.updatePizza(pizza) //this returns an observable
             .pipe( //gets pizza from server
                 map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)), //dispatch action back to reducer
                 catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
             );
         })
     );

     @Effect()
     removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA)
     .pipe(
         map((action: pizzaActions.RemovePizza) => action.payload),
          switchMap(pizza => {
              return this.pizzaService.removePizza(pizza) //returns an observable
              .pipe(
                  map(() => new pizzaActions.RemovePizzaSuccess(pizza)), //no input since we do not get a pizza back
                  catchError(error => of(new pizzaActions.UpdatePizzaFail(error))) //return an observable of remove pizza fail
              );
          })
     );
}