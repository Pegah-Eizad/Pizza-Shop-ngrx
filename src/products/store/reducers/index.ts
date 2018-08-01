import { ActionReducerMap } from '@ngrx/store';
import * as pizzasReducer from './pizzas.reducer';
//register reducers as part of the store in this file
export interface productsState {
  pizzas: pizzasReducer.PizzaState
}
//action redcucerMap takes a generic type
export const reducers: ActionReducerMap<productsState> = {
    pizzas: pizzasReducer.reducer
}